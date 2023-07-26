"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalStringSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class OptionalStringSpecification {
    isSatisfiedBy(candidate) {
        return (typeof candidate === 'string' ||
            typeof candidate === 'undefined' ||
            candidate === null);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.OptionalStringSpecification = OptionalStringSpecification;
//# sourceMappingURL=optionalString.specification.js.map