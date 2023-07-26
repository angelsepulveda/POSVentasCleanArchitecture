"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const category_1 = __importDefault(require("./category"));
const categoryActive_vo_1 = require("./value-objects/categoryActive.vo");
const CategoryDescription_vo_1 = require("./value-objects/CategoryDescription.vo");
const categoryId_vo_1 = require("./value-objects/categoryId.vo");
const categoryName_vo_1 = require("./value-objects/categoryName.vo");
class CategoryFactory {
    async create(name, description) {
        const categoryProperties = {
            name: new categoryName_vo_1.CategoryName(name),
            id: new categoryId_vo_1.CategoryId((0, uuid_1.v4)()),
            description: new CategoryDescription_vo_1.CategoryDescription(description),
            active: new categoryActive_vo_1.CategoryActive(true)
        };
        const category = new category_1.default(categoryProperties);
        return category;
    }
}
exports.default = CategoryFactory;
//# sourceMappingURL=categoryFactory.js.map