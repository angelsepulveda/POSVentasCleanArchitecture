"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDescription = void 0;
const optionalStringMaxLength_vo_1 = require("../../../../shared/domain/value-objects/optionalStringMaxLength.vo");
class CategoryDescription extends optionalStringMaxLength_vo_1.OptionalStringMaxLengthVO {
    constructor(value) {
        super(value, 256);
    }
}
exports.CategoryDescription = CategoryDescription;
//# sourceMappingURL=CategoryDescription.vo.js.map