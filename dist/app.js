"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const errors_1 = __importDefault(require("./helpers/errors"));
const health_1 = __importDefault(require("./helpers/health"));
const router_1 = __importDefault(require("./modules/warehouse/brands/interfaces/http/router"));
const router_2 = __importDefault(require("./modules/warehouse/categories/interfaces/http/router"));
class App {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.mountSwagger();
        this.owaspSecurityMiddlewares();
        this.mountMiddlewares();
        this.mountHealthCheck();
        this.mountRoutes();
        this.mounthErrors();
    }
    owaspSecurityMiddlewares() {
        this.expressApp.use((0, hpp_1.default)());
        this.expressApp.use((0, helmet_1.default)());
        this.expressApp.use((0, cors_1.default)({
            origin: '*',
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        }));
    }
    mountHealthCheck() {
        this.expressApp.use('/', health_1.default);
    }
    mountMiddlewares() {
        this.expressApp.use((0, compression_1.default)());
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(express_1.default.urlencoded({ extended: true }));
    }
    mountRoutes() {
        this.expressApp.use('/api/categories', router_2.default);
        this.expressApp.use('/api/brands', router_1.default);
    }
    mounthErrors() {
        this.expressApp.use(errors_1.default.notFound);
    }
    mountSwagger() {
        const options = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'API de POS Ventas',
                    version: '1.0.0',
                    description: 'API para sistema POS Ventas',
                },
            },
            apis: ['./src/modules/**/interfaces/http/*.{ts,js}'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.expressApp.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
}
exports.default = new App().expressApp;
//# sourceMappingURL=app.js.map