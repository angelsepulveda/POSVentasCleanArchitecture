"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const CategoryDescription_vo_1 = require("../../domain/value-objects/CategoryDescription.vo");
const categoryId_vo_1 = require("../../domain/value-objects/categoryId.vo");
const categoryUpdater_dto_1 = require("../dto/response/categoryUpdater.dto");
const categoryName_vo_1 = require("./../../domain/value-objects/categoryName.vo");
let CategoryUpdater = class CategoryUpdater {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async run(params) {
        const categoryUpdate = {
            name: new categoryName_vo_1.CategoryName(params.name),
            description: new CategoryDescription_vo_1.CategoryDescription(params.description)
        };
        const data = await this.categoryRepository.update(new categoryId_vo_1.CategoryId(params.id), categoryUpdate);
        return new categoryUpdater_dto_1.CategoryUpdaterMapping().execute(data.properties());
    }
};
CategoryUpdater = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('CategoryRepository')),
    __metadata("design:paramtypes", [Object])
], CategoryUpdater);
exports.default = CategoryUpdater;
//# sourceMappingURL=categoryUpdater.js.map