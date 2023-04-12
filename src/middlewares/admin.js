import firebase from '../helper/firebase';

export const adminMiddleware = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if(!token) {
            return res.status(401).json({
                message: 'Provide a token',
                data: undefined,
                error: true,
            });
        }

        const { role } = await firebase.auth().verifyIdToken(token);

        if(!role) {
            return res.status(403).json({
                message: 'No credentials found',
                data: undefined,
                error: true,
            });
        }
        return next();
    } catch (error) {
        return res.status(403).json({
            message: error.message ? error.message : error,
            data: undefined,
            error: true,
        });
    }
};