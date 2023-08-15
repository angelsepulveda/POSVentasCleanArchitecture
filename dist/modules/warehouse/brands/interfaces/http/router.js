"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const container_1 = require("../../../../shared/infrastructure/container");
const brandCreator_controller_1 = __importDefault(require("./controllers/brandCreator.controller"));
const brandDeleter_controller_1 = __importDefault(require("./controllers/brandDeleter.controller"));
const brandFinder_controller_1 = __importDefault(require("./controllers/brandFinder.controller"));
const brandLister_controller_1 = __importDefault(require("./controllers/brandLister.controller"));
const brandUpdater_controller_1 = __importDefault(require("./controllers/brandUpdater.controller"));
const brandException_middleware_1 = require("./middlewares/brandException.middleware");
const brandValidator_middleware_1 = require("./middlewares/brandValidator.middleware");
class BrandRouter {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
        this.mountRoutes();
        this.mountMiddlewares();
    }
    mountRoutes() {
        //controlles
        const creatorController = container_1.container.get(brandCreator_controller_1.default);
        const updaterController = container_1.container.get(brandUpdater_controller_1.default);
        const deleterController = container_1.container.get(brandDeleter_controller_1.default);
        const finderController = container_1.container.get(brandFinder_controller_1.default);
        const listerController = container_1.container.get(brandLister_controller_1.default);
        //rutas
        /**
         * @swagger
         * tags:
         *   name: Brands
         *   description: Operaciones relacionadas con marcas
         */
        /**
         * @swagger
         * /api/brands:
         *   get:
         *     summary: Obtener todas las marcas
         *     tags: [Brands]
         *     responses:
         *       200:
         *         description: Lista de marcas
         */
        this.expressRouter.get('/', listerController.run.bind(listerController));
        /**
         * @swagger
         * /api/brands/{id}:
         *   get:
         *     summary: Obtener una marca por su ID
         *     tags: [Brands]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la marca
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Detalles de la marca
         *       404:
         *         description: Marca no encontrada
         */
        this.expressRouter.get('/:id', ...brandValidator_middleware_1.MiddlewareFinder, finderController.run.bind(finderController));
        /**
         * @swagger
         * /api/brands:
         *   post:
         *     summary: Insertar una nueva marca
         *     tags: [Brands]
         *     requestBody:
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               name:
         *                 type: string
         *               description:
         *                 type: string
         *             required:
         *               - name
         *     responses:
         *       201:
         *         description: Brand creada exitosamente
         */
        this.expressRouter.post('/', ...brandValidator_middleware_1.MiddlewareCreator, creatorController.run.bind(creatorController));
        /**
         * @swagger
         * /api/brands/{id}:
         *   put:
         *     summary: Actualizar una marca por su ID
         *     tags: [Brands]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la marca
         *         schema:
         *           type: string
         *     requestBody:
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               name:
         *                 type: string
         *               description:
         *                 type: string
         *     responses:
         *       200:
         *         description: Marca actualizada exitosamente
         *       404:
         *         description: Marca no encontrada
         */
        this.expressRouter.put('/:id', ...brandValidator_middleware_1.MiddlewareUpdater, updaterController.run.bind(updaterController));
        /**
         * @swagger
         * /api/brands/{id}:
         *   delete:
         *     summary: Eliminar una marca por su ID
         *     tags: [Brands]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la marca
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Marca eliminada exitosamente
         *       404:
         *         description: Marca no encontrada
         */
        this.expressRouter.delete('/:id', deleterController.run.bind(deleterController));
    }
    mountMiddlewares() {
        this.expressRouter.use(brandException_middleware_1.BrandMiddlewareError);
    }
}
exports.default = new BrandRouter().expressRouter;
//# sourceMappingURL=router.js.map