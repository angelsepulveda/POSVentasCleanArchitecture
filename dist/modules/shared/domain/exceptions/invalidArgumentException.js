"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidArgumentException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class InvalidArgumentException extends domain_exception_1.DomainException {
    constructor() {
        super(InvalidArgumentException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.INVALID_ARGUMENT;
    }
    static getMessage() {
        return 'Value must be defined';
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
//# sourceMappingURL=invalidArgumentException.js.map