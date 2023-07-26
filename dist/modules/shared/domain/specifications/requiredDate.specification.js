"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredDateSpecification = void 0;
const luxon_1 = require("luxon");
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class RequiredDateSpecification {
    isSatisfiedBy(candidate) {
        return luxon_1.DateTime.fromISO(candidate).isValid;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.RequiredDateSpecification = RequiredDateSpecification;
//# sourceMappingURL=requiredDate.specification.js.map