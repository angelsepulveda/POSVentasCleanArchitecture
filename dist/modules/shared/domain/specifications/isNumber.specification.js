"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumberSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class IsNumberSpecification {
    isSatisfiedBy(candidate) {
        return typeof candidate === 'number' && Number.isInteger(candidate);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.IsNumberSpecification = IsNumberSpecification;
//# sourceMappingURL=isNumber.specification.js.map