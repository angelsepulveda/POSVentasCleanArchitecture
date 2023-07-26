"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxDateLimitSpecification = void 0;
const luxon_1 = require("luxon");
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class MaxDateLimitSpecification {
    constructor(maxDateLimit) {
        this.maxDateLimit = maxDateLimit;
    }
    isSatisfiedBy(candidate) {
        return luxon_1.DateTime.fromISO(candidate) <= luxon_1.DateTime.fromISO(this.maxDateLimit);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.MaxDateLimitSpecification = MaxDateLimitSpecification;
//# sourceMappingURL=maxDateLimit.specification.js.map