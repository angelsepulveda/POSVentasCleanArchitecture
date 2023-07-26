"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMaxLimitSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class NumberMaxLimitSpecification {
    constructor(maxLimit) {
        this.maxLimit = maxLimit;
    }
    isSatisfiedBy(candidate) {
        return candidate <= this.maxLimit;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.NumberMaxLimitSpecification = NumberMaxLimitSpecification;
//# sourceMappingURL=numberMaxLimit.specification.js.map