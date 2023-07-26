"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMaxLengthSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class StringMaxLengthSpecification {
    constructor(maxLength) {
        this.maxLength = maxLength;
    }
    isSatisfiedBy(candidate) {
        return typeof candidate === 'string' && candidate.length <= this.maxLength;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.StringMaxLengthSpecification = StringMaxLengthSpecification;
//# sourceMappingURL=stringMaxLength.specification.js.map