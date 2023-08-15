"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brand_1 = __importDefault(require("../../domain/brand"));
const brandActive_vo_1 = require("../../domain/valueObjects/brandActive.vo");
const brandDescription_vo_1 = require("../../domain/valueObjects/brandDescription.vo");
const brandId_vo_1 = require("../../domain/valueObjects/brandId.vo");
const brandName_vo_1 = require("../../domain/valueObjects/brandName.vo");
const brand_entity_1 = require("./brand.entity");
class BrandMapper {
    static toDomain(brandEntity) {
        return new brand_1.default({
            id: new brandId_vo_1.BrandId(brandEntity.guid),
            name: new brandName_vo_1.BrandName(brandEntity.name),
            description: new brandDescription_vo_1.BrandDescription(brandEntity.description),
            active: new brandActive_vo_1.BrandActive(brandEntity.active),
        });
    }
    static toEntity(brand) {
        const brandInsert = new brand_entity_1.BrandEntity();
        const { id, name, description, active } = brand.toPrimitives();
        Object.assign(brandInsert, {
            guid: id,
            name,
            description,
            active,
        });
        return brandInsert;
    }
}
exports.default = BrandMapper;
//# sourceMappingURL=brand.mapper.js.map