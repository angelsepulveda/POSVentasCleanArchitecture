"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredBooleanVO = void 0;
const invalidBoolean_exception_1 = require("../exceptions/invalidBoolean.exception");
const isBoolean_specification_1 = require("../specifications/isBoolean.specification");
class RequiredBooleanVO {
    constructor(value) {
        this.isBooleanSpec = new isBoolean_specification_1.IsBooleanSpecification();
        this.validate(value);
        this.value = value;
    }
    validate(value) {
        if (!this.valueObjectSpec().isSatisfiedBy(value)) {
            throw new invalidBoolean_exception_1.InvalidBooleanException();
        }
    }
    valueObjectSpec() {
        return this.isBooleanSpec;
    }
    getValue() {
        return this.value;
    }
}
exports.RequiredBooleanVO = RequiredBooleanVO;
//# sourceMappingURL=requiredBoolean.vo.js.map