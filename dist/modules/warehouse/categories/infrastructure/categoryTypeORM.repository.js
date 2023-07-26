"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const database_bootstrap_1 = __importDefault(require("../../../../bootstrap/database.bootstrap"));
const category_exception_1 = require("../domain/exceptions/category.exception");
const category_entity_1 = require("./category.entity");
const category_mapper_1 = __importDefault(require("./category.mapper"));
let CategoryTypeORMRepository = class CategoryTypeORMRepository {
    async list() {
        const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
        const result = await repo.find({ where: { active: true } });
        return result.map((el) => category_mapper_1.default.toDomain(el));
    }
    async listOne(id) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
        const result = await repo.findOne({ where: { guid: id.getValue() } });
        if (!result) {
            throw new category_exception_1.CategoryNotFoundException();
        }
        return category_mapper_1.default.toDomain(result);
    }
    async insert(category) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
        const categoryInsert = new category_entity_1.CategoryEntity();
        const { id, name, description, active } = category.properties();
        Object.assign(categoryInsert, {
            guid: id.value,
            name,
            description,
            active,
        });
        await repo.save(categoryInsert);
        return category;
    }
    async update(id, category) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
        const categoryFound = await repo.findOne({ where: { guid: id.getValue() } });
        if (!categoryFound) {
            throw new category_exception_1.CategoryNotFoundException();
        }
        Object.assign(categoryFound, category);
        const categoryEntity = await repo.save(categoryFound);
        return category_mapper_1.default.toDomain(categoryEntity);
    }
    async delete(id) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
        const categoryFound = await repo.findOne({
            where: { guid: id.getValue() },
        });
        if (!categoryFound) {
            throw new category_exception_1.CategoryNotFoundException();
        }
        categoryFound.active = false;
        const categoryEntity = await repo.save(categoryFound);
        return category_mapper_1.default.toDomain(categoryEntity);
    }
};
CategoryTypeORMRepository = __decorate([
    (0, inversify_1.injectable)()
], CategoryTypeORMRepository);
exports.default = CategoryTypeORMRepository;
//# sourceMappingURL=categoryTypeORM.repository.js.map