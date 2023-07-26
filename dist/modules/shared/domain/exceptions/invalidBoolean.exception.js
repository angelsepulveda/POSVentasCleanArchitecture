"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidBooleanException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidBooleanException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidBooleanException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_BOOLEAN;
    }
    static getMessage() {
        return 'Invalid boolean value';
    }
}
exports.InvalidBooleanException = InvalidBooleanException;
//# sourceMappingURL=invalidBoolean.exception.js.map