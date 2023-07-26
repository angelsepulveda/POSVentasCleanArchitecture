"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndSpecification = void 0;
const or_specification_1 = require("./or.specification");
class AndSpecification {
    constructor(spec1, spec2) {
        this.spec1 = spec1;
        this.spec2 = spec2;
    }
    isSatisfiedBy(candidate) {
        return this.spec1.isSatisfiedBy(candidate) && this.spec2.isSatisfiedBy(candidate);
    }
    and(spec) {
        return new AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.AndSpecification = AndSpecification;
//# sourceMappingURL=and.specification.js.map