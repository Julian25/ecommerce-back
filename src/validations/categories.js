import Joi from 'joi';

export const createCategoryValidation = (req,res, next) => {
    const newCategory = Joi.object({
        name : Joi.string()
        .min(3)
        .max(30)
        .pattern(/^[A-Za-z0-9 ]+$/)
        .required()
    })
    const valid = newCategory.validate(req.body);
    if(valid.error) {
        return res.status(400).json({
            message: valid.error.details[0].message,
            data: undefined,
            error: true,
        });
    }
    return next();
};

export const updateCategoryValidation = (req, res, next) => {
    const updateCategory = Joi.object({
        name : Joi.string()
        .min(3)
        .max(30)
        .pattern(/^[A-Za-z0-9 ]+$/)
    })
    const valid = updateCategory.validate(req.body);
    if(valid.error) {
        return res.status(400).json({
            message: valid.error.details[0].message,
            data: undefined,
            error: true,
        });
    }
    return next();
}