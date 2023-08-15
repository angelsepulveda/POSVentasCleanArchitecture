"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryId = void 0;
const uuid_vo_1 = require("../../../../shared/domain/value-objects/uuid.vo");
class CategoryId extends uuid_vo_1.Uuid {
    constructor(value) {
        super(value);
    }
}
exports.CategoryId = CategoryId;
//# sourceMappingURL=categoryId.vo.js.map