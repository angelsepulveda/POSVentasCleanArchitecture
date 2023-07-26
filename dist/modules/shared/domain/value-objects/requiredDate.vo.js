"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredDateVO = void 0;
const invalidRequiredDate_exception_1 = require("../exceptions/invalidRequiredDate.exception");
const requiredDate_specification_1 = require("../specifications/requiredDate.specification");
class RequiredDateVO {
    constructor(value) {
        this.requiredDateSpec = new requiredDate_specification_1.RequiredDateSpecification();
        this.validate(value);
        this.value = value;
    }
    validate(value) {
        if (!this.requiredDateSpec.isSatisfiedBy(value)) {
            throw new invalidRequiredDate_exception_1.InvalidRequiredDateException();
        }
    }
    getValue() {
        return this.value;
    }
}
exports.RequiredDateVO = RequiredDateVO;
//# sourceMappingURL=requiredDate.vo.js.map