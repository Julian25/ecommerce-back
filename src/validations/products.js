import Joi from "joi";

export const createProductValidation = (req, res, next) => {
    const newProduct = Joi.object({
        name: Joi
            .string()
            .min(4)
            .max(40)
            .required()
            .label('Name'),
        description: Joi
            .string()
            .min(10)
            .max(200)
            .required()
            .label('Description'),
        price: Joi
            .number()
            .required()
            .label('Price'),
        category: Joi
            .string()
            .required()
            .label('Category'),
        pictures: Joi
            .required()
            .label('Pictures'),
    });

    const validation = newProduct.validate(req.body);
    if(validation.error) {
        return res.status(400).json({
            message: validation.error.details[0].message,
            data: undefined,
            error: true,
        })
    }
    return next();
};

export const updateProductValidation = (req, res, next) => {
    const updatedProduct = Joi.object({
        name: Joi
            .string()
            .min(4)
            .max(30)
            .pattern(/^[A-Za-z0-9 ]+$/)
            .label('Name'),
        description: Joi
            .string()
            .min(10)
            .max(140)
            .label('Description'),
        price: Joi
            .number()
            .label('Price'),
        category: Joi
            .string()
            .label('Category'),
        pictures: Joi
            .label('Pictures'),
    });
    const validation = updatedProduct.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details[0].message,
            data: undefined,
            error: true,
        });
    }
    return next();
}