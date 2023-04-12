import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firebaseUid: {
        type: String,
        required: false,
    },
});

export default mongoose.model('Admin', adminSchema);