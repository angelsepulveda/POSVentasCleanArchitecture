"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandName = void 0;
const brand_exception_1 = require("../exceptions/brand.exception");
const requiredString_vo_1 = require("./../../../../shared/domain/value-objects/requiredString.vo");
class BrandName extends requiredString_vo_1.RequiredStringVO {
    constructor(value) {
        super(value);
        this.validateLengthNotExceedsMaxCharacters(value);
    }
    validateLengthNotExceedsMaxCharacters(value) {
        if (value.length > BrandName.MAX_LENGTH) {
            throw new brand_exception_1.BrandNameLengthInvalidException(`The name should not exceed ${BrandName.MAX_LENGTH} characters`);
        }
    }
}
exports.BrandName = BrandName;
BrandName.MAX_LENGTH = 50;
//# sourceMappingURL=brandName.vo.js.map