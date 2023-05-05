import firebase from '../helper/firebase';

export const adminMiddleware = async (req, res, next) => {
    const { token } = req.headers;

        if(!token) {
            return res.status(401).json({
                message: 'Provide a token',
                data: undefined,
                error: true,
            });
        }
    try {


        const response = await firebase.auth().verifyIdToken(token);

        if(!response.role) {
            return res.status(403).json({
                message: 'No credentials found',
                data: undefined,
                error: true,
            });
        }
        req.headers.firebaseUid = response.uid;
        return next();
    } catch (error) {
        return res.status(403).json({
            message: error.message ? error.message : error,
            data: undefined,
            error: true,
        });
    }
};