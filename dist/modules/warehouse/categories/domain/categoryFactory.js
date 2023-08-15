"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const category_1 = __importDefault(require("./category"));
const categoryActive_vo_1 = require("./value-objects/categoryActive.vo");
const categoryDescription_vo_1 = require("./value-objects/categoryDescription.vo");
const categoryId_vo_1 = require("./value-objects/categoryId.vo");
const categoryName_vo_1 = require("./value-objects/categoryName.vo");
class CategoryFactory {
    create(name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryProperties = {
                name: new categoryName_vo_1.CategoryName(name),
                id: new categoryId_vo_1.CategoryId((0, uuid_1.v4)()),
                description: new categoryDescription_vo_1.CategoryDescription(description),
                active: new categoryActive_vo_1.CategoryActive(true)
            };
            const category = new category_1.default(categoryProperties);
            return category;
        });
    }
}
exports.default = CategoryFactory;
//# sourceMappingURL=categoryFactory.js.map