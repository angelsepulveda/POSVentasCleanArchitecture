"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredStringMaxLengthVO = void 0;
const invalidRequiredStringMaxLength_exception_1 = require("../exceptions/invalidRequiredStringMaxLength.exception");
const requiredString_specification_1 = require("../specifications/requiredString.specification");
const stringMaxLength_specification_1 = require("../specifications/stringMaxLength.specification");
class RequiredStringMaxLengthVO {
    constructor(value, maxLength) {
        this.requiredStringSpec = new requiredString_specification_1.RequiredStringSpecification();
        this.stringMaxLengthSpec = new stringMaxLength_specification_1.StringMaxLengthSpecification(maxLength);
        this.validate(value);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    validate(value) {
        if (!this.valueObjectSpec().isSatisfiedBy(value)) {
            throw new invalidRequiredStringMaxLength_exception_1.InvalidRequiredStringMaxLengthException();
        }
    }
    valueObjectSpec() {
        return this.requiredStringSpec.and(this.stringMaxLengthSpec);
    }
}
exports.RequiredStringMaxLengthVO = RequiredStringMaxLengthVO;
//# sourceMappingURL=requiredStringMaxLength.vo.js.map