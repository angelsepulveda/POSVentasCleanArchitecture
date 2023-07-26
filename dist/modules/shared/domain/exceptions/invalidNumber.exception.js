"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidNumberException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidNumberException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidNumberException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_NUMBER;
    }
    static getMessage() {
        return 'Invalid number value';
    }
}
exports.InvalidNumberException = InvalidNumberException;
//# sourceMappingURL=invalidNumber.exception.js.map