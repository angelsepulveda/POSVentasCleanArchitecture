"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("../../domain/category"));
const categoryActive_vo_1 = require("../../domain/value-objects/categoryActive.vo");
const categoryDescription_vo_1 = require("../../domain/value-objects/categoryDescription.vo");
const categoryId_vo_1 = require("../../domain/value-objects/categoryId.vo");
const categoryName_vo_1 = require("../../domain/value-objects/categoryName.vo");
const category_entity_1 = require("./category.entity");
class CategoryMapper {
    static toDomain(categoryEntity) {
        return new category_1.default({
            id: new categoryId_vo_1.CategoryId(categoryEntity.guid),
            name: new categoryName_vo_1.CategoryName(categoryEntity.name),
            description: new categoryDescription_vo_1.CategoryDescription(categoryEntity.description),
            active: new categoryActive_vo_1.CategoryActive(categoryEntity.active),
        });
    }
    static toEntity(category) {
        const categoryInsert = new category_entity_1.CategoryEntity();
        const { id, name, description, active } = category.toPrimitives();
        Object.assign(categoryInsert, {
            guid: id,
            name,
            description,
            active,
        });
        return categoryInsert;
    }
}
exports.default = CategoryMapper;
//# sourceMappingURL=category.mapper.js.map