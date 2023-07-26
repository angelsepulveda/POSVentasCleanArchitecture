"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const category_entity_1 = require("../../modules/warehouse/categories/infrastructure/category.entity");
class AppService {
    static get PORT() {
        return parseInt(process.env.PORT) || 3000;
    }
    static get DBConfig() {
        const pass = process.env.DB_PASS;
        return {
            host: process.env.DB_HOST || 'localhost',
            port: +process.env.DB_PORT || 3310,
            entities: [category_entity_1.CategoryEntity],
            //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
            username: process.env.DB_USER || 'user',
            password: pass || '12345',
            database: process.env.DB_NAME || 'bddcursonode',
            synchronize: process.env.DB_SYNC === 'true',
            logging: process.env.DB_LOG === 'true'
        };
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map