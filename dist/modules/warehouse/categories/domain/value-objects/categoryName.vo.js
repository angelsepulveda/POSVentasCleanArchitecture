"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryName = void 0;
const requiredStringMaxLength_vo_1 = require("../../../../shared/domain/value-objects/requiredStringMaxLength.vo");
class CategoryName extends requiredStringMaxLength_vo_1.RequiredStringMaxLengthVO {
    constructor(value) {
        super(value, 50);
    }
}
exports.CategoryName = CategoryName;
//# sourceMappingURL=categoryName.vo.js.map