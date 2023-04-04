import Product from "../models/Product";

//Get all products

export const getAllProducts = async (req,res) => {
    try {
        const findAll = await Product.find({}).populate('category');
        return res.status(200).json({
            message: 'All products found',
            data: findAll,
            error: false
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Theres was an error',
            data: error,
            error: true,
        });
    }
};

//Delete a product

export const deleteProductById = async (req,res) => {
    try {
        const deleted = Product.findByIdAndDelete(req.params.id);
        if(!deleted) {
            return res.status(404).json({
                message: 'Product not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Product deleted',
            data: deleted,
            error: false,
        });

    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: error,
            error: true,
        });
    }
};

//Create a new product

export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            ...req.body
        });
        await newProduct.save()
        return res.status(201).json({
            message: 'Product successfully created',
            data: newProduct,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: error,
            error: true,
        });
    }
};

// Update a product

export const updateProduct = async (req,res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).populate('category')
        if(!updatedProduct) {
            return res.status(404).json({
                message: 'Product not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Product successfully deleted',
            data: updatedProduct,
            error: false
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: error,
            error: true
        });
    }
};

//Get a product by id

export const getProductById = async (req,res) => {
    try {
        const productById = await Product.findById(req.params.id).populate('category')
        if(!productById) {
            return res.status(404).json({
                message: 'Product not found',
                data: undefined,
                error: true
            });
        }

        return res.status(200).json({
            message: 'Product found',
            data: productById,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: error,
            error: true
        });
    }
}