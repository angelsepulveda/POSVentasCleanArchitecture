"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidInvalidException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class UuidInvalidException extends domain_exception_1.DomainException {
    constructor() {
        super(UuidInvalidException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.UUID_INVALID;
    }
    static getMessage() {
        return 'Uuid is invalid';
    }
}
exports.UuidInvalidException = UuidInvalidException;
//# sourceMappingURL=uuidInvalid.exception.js.map