"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const container_1 = require("../../warehouse/brands/infrastructure/container");
const container_2 = require("../../warehouse/categories/infrastructure/container");
//registro de todos los contenedores de dependencias de la App
const container = new inversify_1.Container();
exports.container = container;
container.load(container_2.CategoryContainer);
container.load(container_1.BrandContainer);
//# sourceMappingURL=container.js.map