"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequiredDateException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidRequiredDateException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidRequiredDateException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_REQUIRED_DATE;
    }
    static getMessage() {
        return 'Invalid required date value';
    }
}
exports.InvalidRequiredDateException = InvalidRequiredDateException;
//# sourceMappingURL=invalidRequiredDate.exception.js.map