"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMinLimitSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class NumberMinLimitSpecification {
    constructor(minLimit) {
        this.minLimit = minLimit;
    }
    isSatisfiedBy(candidate) {
        return candidate >= this.minLimit;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.NumberMinLimitSpecification = NumberMinLimitSpecification;
//# sourceMappingURL=numberMinLimit.specification.js.map