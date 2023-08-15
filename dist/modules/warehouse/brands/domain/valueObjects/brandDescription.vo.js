"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandDescription = void 0;
const brand_exception_1 = require("../exceptions/brand.exception");
const optionalString_vo_1 = require("./../../../../shared/domain/value-objects/optionalString.vo");
class BrandDescription extends optionalString_vo_1.OptionalStringVO {
    constructor(value) {
        super(value);
        this.validateLengthNotExceedsMaxCharacters(value);
    }
    validateLengthNotExceedsMaxCharacters(value) {
        if (value && value.length > BrandDescription.MAX_LENGTH) {
            throw new brand_exception_1.BrandDescriptionLengthInvalidException(`The description should not exceed ${BrandDescription.MAX_LENGTH} characters`);
        }
    }
}
exports.BrandDescription = BrandDescription;
BrandDescription.MAX_LENGTH = 1024;
//# sourceMappingURL=brandDescription.vo.js.map