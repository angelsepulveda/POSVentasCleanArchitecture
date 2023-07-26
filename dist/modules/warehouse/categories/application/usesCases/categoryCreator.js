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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const categoryFactory_1 = __importDefault(require("../../domain/categoryFactory"));
const categoryCreator_dto_1 = require("../dto/response/categoryCreator.dto");
let CategoryCreator = class CategoryCreator {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async run(params) {
        const category = await new categoryFactory_1.default().create(params.name, params.description);
        const data = await this.categoryRepository.insert(category);
        return new categoryCreator_dto_1.CategoryCreatorMapping().execute(data.properties());
    }
};
CategoryCreator = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('CategoryRepository')),
    __metadata("design:paramtypes", [Object])
], CategoryCreator);
exports.default = CategoryCreator;
//# sourceMappingURL=categoryCreator.js.map