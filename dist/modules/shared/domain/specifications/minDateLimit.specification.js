"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinDateLimitSpecification = void 0;
const luxon_1 = require("luxon");
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class MinDateLimitSpecification {
    constructor(minDateLimit) {
        this.minDateLimit = minDateLimit;
    }
    isSatisfiedBy(candidate) {
        return luxon_1.DateTime.fromISO(candidate) >= luxon_1.DateTime.fromISO(this.minDateLimit);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.MinDateLimitSpecification = MinDateLimitSpecification;
//# sourceMappingURL=minDateLimit.specification.js.map