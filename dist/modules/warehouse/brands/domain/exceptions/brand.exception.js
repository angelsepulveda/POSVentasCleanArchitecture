"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandNotFoundException = exports.BrandDescriptionLengthInvalidException = exports.BrandNameLengthInvalidException = exports.BrandNameRequiredException = void 0;
const domain_exception_1 = require("../../../../shared/domain/exceptions/domain.exception");
const brandException_enum_1 = require("../enums/brandException.enum");
class BrandNameRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(BrandNameRequiredException.getMessage());
        this.name = brandException_enum_1.BrandExceptionCode.BRAND_NAME_REQUIRED;
    }
    static getMessage() {
        return 'Name is required';
    }
}
exports.BrandNameRequiredException = BrandNameRequiredException;
class BrandNameLengthInvalidException extends domain_exception_1.DomainException {
    constructor(value) {
        super(BrandNameLengthInvalidException.getMessage(value));
        this.name = brandException_enum_1.BrandExceptionCode.BRAND_NAME_LENGTH_INVALID;
    }
    static getMessage(value) {
        return `Name must not exceed 50 characters, but '${value}' contains ${value.length}`;
    }
}
exports.BrandNameLengthInvalidException = BrandNameLengthInvalidException;
class BrandDescriptionLengthInvalidException extends domain_exception_1.DomainException {
    constructor(value) {
        super(BrandDescriptionLengthInvalidException.getMessage(value));
        this.name = brandException_enum_1.BrandExceptionCode.BRAND_DESCRIPTION_LENGTH_INVALID;
    }
    static getMessage(value) {
        return `Description must not exceed 1024 characters, but '${value}' contains ${value.length}`;
    }
}
exports.BrandDescriptionLengthInvalidException = BrandDescriptionLengthInvalidException;
class BrandNotFoundException extends domain_exception_1.DomainException {
    constructor() {
        super(BrandNotFoundException.getMessage());
        this.name = brandException_enum_1.BrandExceptionCode.BRAND_NOT_FOUND;
    }
    static getMessage() {
        return 'Brand not found';
    }
}
exports.BrandNotFoundException = BrandNotFoundException;
//# sourceMappingURL=brand.exception.js.map