"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const container_1 = require("../../../../shared/infrastructure/container");
const categoryCreator_controller_1 = __importDefault(require("./controllers/categoryCreator.controller"));
const categoryDeleter_controller_1 = __importDefault(require("./controllers/categoryDeleter.controller"));
const categoryFinder_controller_1 = __importDefault(require("./controllers/categoryFinder.controller"));
const categoryLister_controller_1 = __importDefault(require("./controllers/categoryLister.controller"));
const categoryUpdater_controller_1 = __importDefault(require("./controllers/categoryUpdater.controller"));
const categoryException_middleware_1 = require("./middlewares/categoryException.middleware");
const categoryValidator_middleware_1 = require("./middlewares/categoryValidator.middleware");
class CategoryRouter {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
        this.mountRoutes();
        this.mountMiddlewares();
    }
    mountRoutes() {
        //controlles
        const creatorController = container_1.container.get(categoryCreator_controller_1.default);
        const updaterController = container_1.container.get(categoryUpdater_controller_1.default);
        const deleterController = container_1.container.get(categoryDeleter_controller_1.default);
        const finderController = container_1.container.get(categoryFinder_controller_1.default);
        const listerController = container_1.container.get(categoryLister_controller_1.default);
        //rutas
        /**
         * @swagger
         * tags:
         *   name: Categories
         *   description: Operaciones relacionadas con categorías
         */
        /**
         * @swagger
         * /api/categories:
         *   get:
         *     summary: Obtener todas las categorías
         *     tags: [Categories]
         *     responses:
         *       200:
         *         description: Lista de categorías
         */
        this.expressRouter.get('/', listerController.run.bind(listerController));
        /**
         * @swagger
         * /api/categories/{id}:
         *   get:
         *     summary: Obtener una categoría por su ID
         *     tags: [Categories]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la categoría
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Detalles de la categoría
         *       404:
         *         description: Categoría no encontrada
         */
        this.expressRouter.get('/:id', ...categoryValidator_middleware_1.MiddlewareListOne, finderController.run.bind(finderController));
        /**
         * @swagger
         * /api/categories:
         *   post:
         *     summary: Insertar una nueva categoría
         *     tags: [Categories]
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
         *         description: Categoría creada exitosamente
         */
        this.expressRouter.post('/', ...categoryValidator_middleware_1.MiddlewareCreator, creatorController.run.bind(creatorController));
        /**
         * @swagger
         * /api/categories/{id}:
         *   put:
         *     summary: Actualizar una categoría por su ID
         *     tags: [Categories]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la categoría
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
         *         description: Categoría actualizada exitosamente
         *       404:
         *         description: Categoría no encontrada
         */
        this.expressRouter.put('/:id', ...categoryValidator_middleware_1.MiddlewareUpdater, updaterController.run.bind(updaterController));
        /**
         * @swagger
         * /api/categories/{id}:
         *   delete:
         *     summary: Eliminar una categoría por su ID
         *     tags: [Categories]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         description: ID de la categoría
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Categoría eliminada exitosamente
         *       404:
         *         description: Categoría no encontrada
         */
        this.expressRouter.delete('/:id', deleterController.run.bind(deleterController));
    }
    mountMiddlewares() {
        this.expressRouter.use(categoryException_middleware_1.CategoryMiddlewareError);
    }
}
exports.default = new CategoryRouter().expressRouter;
//# sourceMappingURL=router.js.map