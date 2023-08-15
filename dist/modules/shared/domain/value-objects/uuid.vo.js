"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const uuidInvalid_exception_1 = require("../exceptions/uuidInvalid.exception");
const valueObject_1 = require("./valueObject");
class Uuid extends valueObject_1.ValueObject {
    constructor(value) {
        super(value);
        this.value = value;
        this.ensureIsValidUuid(value);
    }
    static random() {
        return new Uuid((0, uuid_1.v4)());
    }
    ensureIsValidUuid(id) {
        if (!(0, uuid_1.validate)(id)) {
            throw new uuidInvalid_exception_1.UuidInvalidException();
        }
    }
}
exports.Uuid = Uuid;
//# sourceMappingURL=uuid.vo.js.map