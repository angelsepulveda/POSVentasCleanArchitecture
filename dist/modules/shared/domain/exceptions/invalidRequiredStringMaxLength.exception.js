"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequiredStringMaxLengthException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidRequiredStringMaxLengthException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidRequiredStringMaxLengthException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_REQUIRED_STRING_MAX_LENGTH;
    }
    static getMessage() {
        return 'Invalid required string value';
    }
}
exports.InvalidRequiredStringMaxLengthException = InvalidRequiredStringMaxLengthException;
//# sourceMappingURL=invalidRequiredStringMaxLength.exception.js.map