"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryContainer = void 0;
const inversify_1 = require("inversify");
const categoryCreator_1 = __importDefault(require("../application/usesCases/categoryCreator"));
const categoryDeleter_1 = __importDefault(require("../application/usesCases/categoryDeleter"));
const categoryFinder_1 = __importDefault(require("../application/usesCases/categoryFinder"));
const categoryLister_1 = __importDefault(require("../application/usesCases/categoryLister"));
const categoryUpdater_1 = __importDefault(require("../application/usesCases/categoryUpdater"));
const categoryCreator_controller_1 = __importDefault(require("../interfaces/http/controllers/categoryCreator.controller"));
const categoryDeleter_controller_1 = __importDefault(require("../interfaces/http/controllers/categoryDeleter.controller"));
const categoryFinder_controller_1 = __importDefault(require("../interfaces/http/controllers/categoryFinder.controller"));
const categoryLister_controller_1 = __importDefault(require("../interfaces/http/controllers/categoryLister.controller"));
const categoryUpdater_controller_1 = __importDefault(require("../interfaces/http/controllers/categoryUpdater.controller"));
const categoryTypeORM_repository_1 = __importDefault(require("./categoryTypeORM.repository"));
//registro de dependencias
exports.CategoryContainer = new inversify_1.ContainerModule(bind => {
    bind('CategoryRepository').to(categoryTypeORM_repository_1.default);
    bind(categoryCreator_1.default).toSelf();
    bind(categoryCreator_controller_1.default).toSelf();
    bind(categoryLister_1.default).toSelf();
    bind(categoryLister_controller_1.default).toSelf();
    bind(categoryFinder_1.default).toSelf();
    bind(categoryFinder_controller_1.default).toSelf();
    bind(categoryUpdater_1.default).toSelf();
    bind(categoryUpdater_controller_1.default).toSelf();
    bind(categoryDeleter_1.default).toSelf();
    bind(categoryDeleter_controller_1.default).toSelf();
});
//# sourceMappingURL=container.js.map