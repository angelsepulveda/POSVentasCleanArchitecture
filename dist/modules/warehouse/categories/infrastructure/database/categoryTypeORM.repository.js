"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const inversify_1 = require("inversify");
const database_bootstrap_1 = __importDefault(require("../../../../../bootstrap/database.bootstrap"));
const category_exception_1 = require("../../domain/exceptions/category.exception");
const category_entity_1 = require("./category.entity");
const category_mapper_1 = __importDefault(require("./category.mapper"));
let CategoryTypeORMRepository = class CategoryTypeORMRepository {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
            const result = yield repo.find({ where: { active: true } });
            return result.map((el) => category_mapper_1.default.toDomain(el));
        });
    }
    listOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
            const result = yield repo.findOne({ where: { guid: id.value } });
            if (!result) {
                throw new category_exception_1.CategoryNotFoundException();
            }
            return category_mapper_1.default.toDomain(result);
        });
    }
    insert(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
            const categoryInsert = category_mapper_1.default.toEntity(category);
            yield repo.save(categoryInsert);
            return category;
        });
    }
    update(id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
            const categoryFound = yield repo.findOne({ where: { guid: id.value } });
            if (!categoryFound) {
                throw new category_exception_1.CategoryNotFoundException();
            }
            Object.assign(categoryFound, category);
            const categoryEntity = yield repo.save(categoryFound);
            return category_mapper_1.default.toDomain(categoryEntity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(category_entity_1.CategoryEntity);
            const categoryFound = yield repo.findOne({
                where: { guid: id.value },
            });
            if (!categoryFound) {
                throw new category_exception_1.CategoryNotFoundException();
            }
            categoryFound.active = false;
            const categoryEntity = yield repo.save(categoryFound);
            return category_mapper_1.default.toDomain(categoryEntity);
        });
    }
};
CategoryTypeORMRepository = __decorate([
    (0, inversify_1.injectable)()
], CategoryTypeORMRepository);
exports.default = CategoryTypeORMRepository;
//# sourceMappingURL=categoryTypeORM.repository.js.map