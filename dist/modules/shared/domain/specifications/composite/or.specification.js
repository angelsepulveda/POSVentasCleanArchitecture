"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrSpecification = void 0;
const and_specification_1 = require("./and.specification");
class OrSpecification {
    constructor(spec1, spec2) {
        this.spec1 = spec1;
        this.spec2 = spec2;
    }
    isSatisfiedBy(candidate) {
        return this.spec1.isSatisfiedBy(candidate) || this.spec2.isSatisfiedBy(candidate);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new OrSpecification(this, spec);
    }
}
exports.OrSpecification = OrSpecification;
//# sourceMappingURL=or.specification.js.map