import { Router } from 'express';

import { container } from '../../../../shared/infrastructure/container';
import BrandCreatorController from './controllers/brandCreator.controller';
import BrandDeleterController from './controllers/brandDeleter.controller';
import BrandFinderController from './controllers/brandFinder.controller';
import BrandListerController from './controllers/brandLister.controller';
import BrandUpdaterController from './controllers/brandUpdater.controller';
import { BrandMiddlewareError } from './middlewares/brandException.middleware';
import { MiddlewareCreator, MiddlewareFinder, MiddlewareUpdater } from './middlewares/brandValidator.middleware';

class BrandRouter {
   readonly expressRouter: Router;

   constructor(){
      this.expressRouter = Router();
      this.mountRoutes();
      this.mountMiddlewares();
   }

   mountRoutes(): void {
      //controlles
      const creatorController = container.get<BrandCreatorController>(
         BrandCreatorController,
       );
       const updaterController = container.get<BrandUpdaterController>(
         BrandUpdaterController
       );
       const deleterController = container.get<BrandDeleterController>(
         BrandDeleterController
       );
       const finderController = container.get<BrandFinderController>(
         BrandFinderController
       );
       const listerController = container.get<BrandListerController>(
         BrandListerController
       );
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
      this.expressRouter.get('/:id', ...MiddlewareFinder, finderController.run.bind(finderController));
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
      this.expressRouter.post('/',...MiddlewareCreator,  creatorController.run.bind(creatorController));
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
      this.expressRouter.put('/:id',...MiddlewareUpdater, updaterController.run.bind(updaterController));
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

   mountMiddlewares(): void {
      this.expressRouter.use(BrandMiddlewareError);
   }
}

export default new BrandRouter().expressRouter;
