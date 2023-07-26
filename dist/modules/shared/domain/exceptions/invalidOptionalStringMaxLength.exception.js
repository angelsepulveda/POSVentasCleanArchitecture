"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOptionalStringMaxLengthException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidOptionalStringMaxLengthException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidOptionalStringMaxLengthException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_OPTIONAL_STRING_MAX_LENGTH;
    }
    static getMessage() {
        return 'Invalid optional string value';
    }
}
exports.InvalidOptionalStringMaxLengthException = InvalidOptionalStringMaxLengthException;
//# sourceMappingURL=invalidOptionalStringMaxLength.exception.js.map