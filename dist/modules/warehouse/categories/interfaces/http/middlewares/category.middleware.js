"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareListOne = void 0;
const class_validator_1 = require("class-validator");
const categoryListOne_validator_1 = require("../validators/categoryListOne.validator");
class CategoryMiddleware {
    static async ValidateListOne(req, _res, next) {
        const { id } = req.params;
        const categoryListOneValidator = new categoryListOne_validator_1.CategoryListOneValidator();
        categoryListOneValidator.id = id;
        const errors = await (0, class_validator_1.validate)(categoryListOneValidator);
        if (errors.length > 0) {
            console.log(errors);
            return next(new Error('Invalid request'));
            // return res.status(400).json({ error: 'Invalid request' })
        }
        next();
    }
}
exports.MiddlewareListOne = [
    CategoryMiddleware.ValidateListOne,
];
//# sourceMappingURL=category.middleware.js.map