"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandId = void 0;
const uuid_vo_1 = require("../../../../shared/domain/value-objects/uuid.vo");
class BrandId extends uuid_vo_1.Uuid {
    constructor(value) {
        super(value);
    }
}
exports.BrandId = BrandId;
//# sourceMappingURL=brandId.vo.js.map