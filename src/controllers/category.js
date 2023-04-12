import Category from "../models/Category";


//Get all categories

export const getAllCategories = async (req,res) => {
    try {
        const allCategories = await Category.find({});
        return res.status(200).json({
            message: 'All categories found',
            data: allCategories,
            error: false.valueOf,
        });
    } catch (error) {
        return res.status(400).json({
            message:'There was an error',
            data: undefined,
            error: true,
        });
    }
};


//Delete category 

export const deleteCategory = async (req,res) => {
    try {
        const  categoryDeleted = await Category.findByIdAndDelete(req.params.id);
        if(!categoryDeleted){
            return res.status(404).json({
                message: 'Category not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message:'Category successfully deleted',

        })
    } catch (error) {
        return res.status(400).json({
            message:'There was an error',
            data: undefined,
            error: true,
        });
    }
};

// Create a category

export const createCategory = async (req,res) => {
    try {
        const newCategory = new Category({
            ...req.body
        });
        await newCategory.save();
        return res.status(201).json({
            message: 'New category successfully created',
            data: newCategory,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
            data: undefined,
            error: true,
        });
    }
};

//Update a category

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.body,
            req.params.id,
            {new: true},
        );
        if(!updatedCategory) {
            return res.status(404).json({
                message: 'Category not found',
                data : undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Category successfully updated',
            data: updatedCategory,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: ' There was an error',
            data: undefined,
            error: true,
        })
    }
}

// Find category by id 

export const findCategoryById = async (req, res) => {
    try {
        const categoryById = await Category.findById(req.params.id);
        if(!categoryById) {
            return res.status(404).json({
                message: 'Category not found',
                data: undefined,
                error: true,
            })
        }
        return res.status(200).json({
            message: 'Category found',
            data: categoryById,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true,
        })
    }
}