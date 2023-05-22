import mongoose from "mongoose";

const { Schema } =  mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },

    price: {
        type: Number,
        required: false,
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },

    pictures :{
        type: Array,
        required: true,
    }
});

export default mongoose.model('Product', productSchema);