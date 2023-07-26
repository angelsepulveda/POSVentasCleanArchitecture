"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidVO = void 0;
const uuid_1 = require("uuid");
const guidInvalid_exception_1 = require("../exceptions/guidInvalid.exception");
const uuidV4_specification_1 = require("../specifications/uuidV4.specification");
class GuidVO {
    constructor(value) {
        this.uuidV4Spec = new uuidV4_specification_1.UUIDV4Specification();
        this.validate(value);
        this.value = value;
    }
    validate(value) {
        if (!this.uuidV4Spec.isSatisfiedBy(value)) {
            throw new guidInvalid_exception_1.GuidInvalidException();
        }
    }
    getValue() {
        return this.value;
    }
    static create() {
        return (0, uuid_1.v4)();
    }
}
exports.GuidVO = GuidVO;
//# sourceMappingURL=guid.vo.js.map