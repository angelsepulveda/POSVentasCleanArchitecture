"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBooleanSpecification = void 0;
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class IsBooleanSpecification {
    isSatisfiedBy(value) {
        return typeof value === 'boolean';
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.IsBooleanSpecification = IsBooleanSpecification;
//# sourceMappingURL=isBoolean.specification.js.map