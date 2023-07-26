"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidInvalidException = void 0;
const domainException_enum_1 = require("../enums/domainException.enum");
const domain_exception_1 = require("./domain.exception");
class GuidInvalidException extends domain_exception_1.DomainException {
    constructor() {
        super(GuidInvalidException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.GUID_INVALID;
    }
    static getMessage() {
        return 'Guid is invalid';
    }
}
exports.GuidInvalidException = GuidInvalidException;
//# sourceMappingURL=guidInvalid.exception.js.map