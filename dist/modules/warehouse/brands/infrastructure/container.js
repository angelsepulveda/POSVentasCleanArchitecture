"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandContainer = void 0;
const inversify_1 = require("inversify");
const brandCreator_1 = __importDefault(require("../application/useCases/brandCreator"));
const brandDeleter_1 = __importDefault(require("../application/useCases/brandDeleter"));
const brandFinder_1 = __importDefault(require("../application/useCases/brandFinder"));
const brandLister_1 = __importDefault(require("../application/useCases/brandLister"));
const brandUpdater_1 = __importDefault(require("../application/useCases/brandUpdater"));
const brandCreator_controller_1 = __importDefault(require("../interfaces/http/controllers/brandCreator.controller"));
const brandDeleter_controller_1 = __importDefault(require("../interfaces/http/controllers/brandDeleter.controller"));
const brandFinder_controller_1 = __importDefault(require("../interfaces/http/controllers/brandFinder.controller"));
const brandLister_controller_1 = __importDefault(require("../interfaces/http/controllers/brandLister.controller"));
const brandUpdater_controller_1 = __importDefault(require("../interfaces/http/controllers/brandUpdater.controller"));
const brandTypeORM_repository_1 = __importDefault(require("./database/brandTypeORM.repository"));
exports.BrandContainer = new inversify_1.ContainerModule(bind => {
    bind('BrandRepository').to(brandTypeORM_repository_1.default);
    bind(brandCreator_1.default).toSelf();
    bind(brandCreator_controller_1.default).toSelf();
    bind(brandLister_1.default).toSelf();
    bind(brandLister_controller_1.default).toSelf();
    bind(brandFinder_1.default).toSelf();
    bind(brandFinder_controller_1.default).toSelf();
    bind(brandUpdater_1.default).toSelf();
    bind(brandUpdater_controller_1.default).toSelf();
    bind(brandDeleter_1.default).toSelf();
    bind(brandDeleter_controller_1.default).toSelf();
});
//# sourceMappingURL=container.js.map