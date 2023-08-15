"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDescription = void 0;
const category_exception_1 = require("../exceptions/category.exception");
const optionalString_vo_1 = require("./../../../../shared/domain/value-objects/optionalString.vo");
class CategoryDescription extends optionalString_vo_1.OptionalStringVO {
    constructor(value) {
        super(value);
        this.validateLengthNotExceedsMaxCharacters(value);
    }
    validateLengthNotExceedsMaxCharacters(value) {
        if (value && value.length > CategoryDescription.MAX_LENGTH) {
            throw new category_exception_1.CategoryDescriptionLengthInvalidException(`The description should not exceed ${CategoryDescription.MAX_LENGTH} characters`);
        }
    }
}
exports.CategoryDescription = CategoryDescription;
CategoryDescription.MAX_LENGTH = 1024;
//# sourceMappingURL=categoryDescription.vo.js.map