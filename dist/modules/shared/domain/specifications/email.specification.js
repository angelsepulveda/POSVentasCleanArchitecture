"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSpecification = void 0;
const email_validator_1 = require("email-validator");
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class EmailSpecification {
    isSatisfiedBy(candidate) {
        return (0, email_validator_1.validate)(candidate);
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.EmailSpecification = EmailSpecification;
//# sourceMappingURL=email.specification.js.map