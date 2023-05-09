import cloudinary from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const deleteImage = async (req, res) => {
    const {public_id} = req.params;
    try {
        const imageDeleted = await cloudinary.uploader.destroy(public_id);
        if (!imageDeleted) {
            res.status(404).json({
                message: 'Image not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Image deleted',
            data: imageDeleted,
            error: false
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
}