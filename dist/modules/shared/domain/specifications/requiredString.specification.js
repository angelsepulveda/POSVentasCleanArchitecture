"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredStringSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
const isString_specification_1 = require("./isString.specification");
class RequiredStringSpecification {
    constructor() {
        this.isStringSpec = new isString_specification_1.IsStringSpecification();
    }
    isSatisfiedBy(value) {
        return this.isStringSpec.isSatisfiedBy(value) && value.trim().length > 0;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.RequiredStringSpecification = RequiredStringSpecification;
//# sourceMappingURL=requiredString.specification.js.map