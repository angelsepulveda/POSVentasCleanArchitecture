"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStringSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class IsStringSpecification {
    isSatisfiedBy(value) {
        return typeof value === 'string';
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.IsStringSpecification = IsStringSpecification;
//# sourceMappingURL=isString.specification.js.map