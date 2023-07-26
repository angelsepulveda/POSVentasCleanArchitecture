"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalStringMaxLengthVO = void 0;
const invalidOptionalStringMaxLength_exception_1 = require("../exceptions/invalidOptionalStringMaxLength.exception");
const isString_specification_1 = require("../specifications/isString.specification");
const optionalString_specification_1 = require("../specifications/optionalString.specification");
const stringMaxLength_specification_1 = require("../specifications/stringMaxLength.specification");
class OptionalStringMaxLengthVO {
    constructor(value, maxLength) {
        this.isStringSpec = new isString_specification_1.IsStringSpecification();
        this.optionalStringSpec = new optionalString_specification_1.OptionalStringSpecification();
        this.stringMaxLengthSpec = new stringMaxLength_specification_1.StringMaxLengthSpecification(maxLength);
        this.validate(value);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    validate(value) {
        const isOptionalStringOk = this.optionalStringSpec.isSatisfiedBy(value);
        const isStringMaxLengthOk = this.valueObjectAndStringSpec().isSatisfiedBy(value || '');
        if (!isOptionalStringOk) {
            throw new invalidOptionalStringMaxLength_exception_1.InvalidOptionalStringMaxLengthException();
        }
        if (!isStringMaxLengthOk) {
            throw new invalidOptionalStringMaxLength_exception_1.InvalidOptionalStringMaxLengthException();
        }
    }
    valueObjectAndStringSpec() {
        return this.isStringSpec.and(this.stringMaxLengthSpec);
    }
}
exports.OptionalStringMaxLengthVO = OptionalStringMaxLengthVO;
//# sourceMappingURL=optionalStringMaxLength.vo.js.map