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
const brand_exception_1 = require("../../domain/exceptions/brand.exception");
const brand_entity_1 = require("./brand.entity");
const brand_mapper_1 = __importDefault(require("./brand.mapper"));
let BrandTypeORMRepository = class BrandTypeORMRepository {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(brand_entity_1.BrandEntity);
            const result = yield repo.find({ where: { active: true } });
            return result.map((el) => brand_mapper_1.default.toDomain(el));
        });
    }
    listOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(brand_entity_1.BrandEntity);
            const result = yield repo.findOne({ where: { guid: id.value } });
            if (!result) {
                throw new brand_exception_1.BrandNotFoundException();
            }
            return brand_mapper_1.default.toDomain(result);
        });
    }
    insert(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(brand_entity_1.BrandEntity);
            const brandInsert = brand_mapper_1.default.toEntity(brand);
            yield repo.save(brandInsert);
            return brand;
        });
    }
    update(id, brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(brand_entity_1.BrandEntity);
            const brandFound = yield repo.findOne({ where: { guid: id.value } });
            if (!brandFound) {
                throw new brand_exception_1.BrandNotFoundException();
            }
            Object.assign(brandFound, brand);
            const brandEntity = yield repo.save(brandFound);
            return brand_mapper_1.default.toDomain(brandEntity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = database_bootstrap_1.default.dataSource.getRepository(brand_entity_1.BrandEntity);
            const brandFound = yield repo.findOne({
                where: { guid: id.value },
            });
            if (!brandFound) {
                throw new brand_exception_1.BrandNotFoundException();
            }
            brandFound.active = false;
            const brandEntity = yield repo.save(brandFound);
            return brand_mapper_1.default.toDomain(brandEntity);
        });
    }
};
BrandTypeORMRepository = __decorate([
    (0, inversify_1.injectable)()
], BrandTypeORMRepository);
exports.default = BrandTypeORMRepository;
//# sourceMappingURL=brandTypeORM.repository.js.map