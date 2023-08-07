import { Router } from 'express';

import { container } from '../../../../shared/infrastructure/container';
import CategoryCreatorController from './controllers/categoryCreator.controller';
import CategoryDeleterController from './controllers/categoryDeleter.controller';
import CategoryFinderController from './controllers/categoryFinder.controller';
import CategoryListerController from './controllers/categoryLister.controller';
import CategoryUpdaterController from './controllers/categoryUpdater.controller';
import { CategoryMiddlewareError } from './middlewares/categoryException.middleware';
import { MiddlewareCreator, MiddlewareListOne, MiddlewareUpdater } from './middlewares/categoryValidator.middleware';


class CategoryRouter {
   readonly expressRouter: Router;

   constructor(){
      this.expressRouter = Router();
      this.mountRoutes();
      this.mountMiddlewares();
   }

   mountRoutes(): void {
      //controlles
      const creatorController = container.get<CategoryCreatorController>(
         CategoryCreatorController,
       );
       const updaterController = container.get<CategoryUpdaterController>(
         CategoryUpdaterController
       );
       const deleterController = container.get<CategoryDeleterController>(
         CategoryDeleterController
       );
       const finderController = container.get<CategoryFinderController>(
         CategoryFinderController
       );
       const listerController = container.get<CategoryListerController>(
         CategoryListerController
       );
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
      this.expressRouter.get('/:id', ...MiddlewareListOne, finderController.run.bind(finderController));
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
      this.expressRouter.post('/',...MiddlewareCreator,  creatorController.run.bind(creatorController));
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
      this.expressRouter.put('/:id',...MiddlewareUpdater, updaterController.run.bind(updaterController));
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

   mountMiddlewares(): void {
      this.expressRouter.use(CategoryMiddlewareError);
   }
}

export default new CategoryRouter().expressRouter;
