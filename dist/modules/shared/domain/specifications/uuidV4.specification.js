"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDV4Specification = void 0;
const uuid_1 = require("uuid");
const and_specification_1 = require("./composite/and.specification");
const or_specification_1 = require("./composite/or.specification");
class UUIDV4Specification {
    isSatisfiedBy(candidate) {
        return (0, uuid_1.validate)(candidate) && (0, uuid_1.version)(candidate) === 4;
    }
    and(spec) {
        return new and_specification_1.AndSpecification(this, spec);
    }
    or(spec) {
        return new or_specification_1.OrSpecification(this, spec);
    }
}
exports.UUIDV4Specification = UUIDV4Specification;
//# sourceMappingURL=uuidV4.specification.js.map