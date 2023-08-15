"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryName = void 0;
const category_exception_1 = require("../exceptions/category.exception");
const requiredString_vo_1 = require("./../../../../shared/domain/value-objects/requiredString.vo");
class CategoryName extends requiredString_vo_1.RequiredStringVO {
    constructor(value) {
        super(value);
        this.validateLengthNotExceedsMaxCharacters(value);
    }
    validateLengthNotExceedsMaxCharacters(value) {
        if (value.length > CategoryName.MAX_LENGTH) {
            throw new category_exception_1.CategoryNameLengthInvalidException(`The name should not exceed ${CategoryName.MAX_LENGTH} characters`);
        }
    }
}
exports.CategoryName = CategoryName;
CategoryName.MAX_LENGTH = 50;
//# sourceMappingURL=categoryName.vo.js.map