"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryNotFoundException = exports.CategoryDescriptionLengthInvalidException = exports.CategoryNameLengthInvalidException = exports.CategoryNameRequiredException = void 0;
const domain_exception_1 = require("../../../../shared/domain/exceptions/domain.exception");
const categoryException_enum_1 = require("../enums/categoryException.enum");
class CategoryNameRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(CategoryNameRequiredException.getMessage());
        this.name = categoryException_enum_1.CategoryExceptionCode.CATEGORY_NAME_REQUIRED;
    }
    static getMessage() {
        return 'Name is required';
    }
}
exports.CategoryNameRequiredException = CategoryNameRequiredException;
class CategoryNameLengthInvalidException extends domain_exception_1.DomainException {
    constructor(value) {
        super(CategoryNameLengthInvalidException.getMessage(value));
        this.name = categoryException_enum_1.CategoryExceptionCode.CATEGORY_NAME_LENGTH_INVALID;
    }
    static getMessage(value) {
        return `Name must not exceed 50 characters, but '${value}' contains ${value.length}`;
    }
}
exports.CategoryNameLengthInvalidException = CategoryNameLengthInvalidException;
class CategoryDescriptionLengthInvalidException extends domain_exception_1.DomainException {
    constructor(value) {
        super(CategoryDescriptionLengthInvalidException.getMessage(value));
        this.name = categoryException_enum_1.CategoryExceptionCode.CATEGORY_DESCRIPTION_LENGTH_INVALID;
    }
    static getMessage(value) {
        return `Description must not exceed 256 characters, but '${value}' contains ${value.length}`;
    }
}
exports.CategoryDescriptionLengthInvalidException = CategoryDescriptionLengthInvalidException;
class CategoryNotFoundException extends domain_exception_1.DomainException {
    constructor() {
        super(CategoryNotFoundException.getMessage());
        this.name = categoryException_enum_1.CategoryExceptionCode.CATEGORY_NOT_FOUND;
    }
    static getMessage() {
        return 'Category not found';
    }
}
exports.CategoryNotFoundException = CategoryNotFoundException;
//# sourceMappingURL=category.exception.js.map