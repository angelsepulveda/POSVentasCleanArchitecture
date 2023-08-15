import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import HandlerErrors from './helpers/errors';
import routerHealth from './helpers/health';
import routerBrand from './modules/warehouse/brands/interfaces/http/router';
import routerCategory from './modules/warehouse/categories/interfaces/http/router';

class App {
   readonly expressApp: Application;

   constructor(){
      this.expressApp = express();
      this.mountSwagger();
      this.owaspSecurityMiddlewares();
      this.mountMiddlewares();
      this.mountHealthCheck();
      this.mountRoutes();
      this.mounthErrors();
   }

   owaspSecurityMiddlewares() {
      this.expressApp.use(hpp());
      this.expressApp.use(helmet());
      this.expressApp.use(
         cors({
            origin: '*',
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
         }),
      );
   }

   mountHealthCheck(): void {
      this.expressApp.use('/', routerHealth);
   }

   mountMiddlewares() {
      this.expressApp.use(compression());
      this.expressApp.use(express.json());
      this.expressApp.use(express.urlencoded({ extended: true }));
   }

   mountRoutes(): void {
      this.expressApp.use('/api/categories', routerCategory);
      this.expressApp.use('/api/brands', routerBrand);
   }
   mounthErrors(): void{
      this.expressApp.use(HandlerErrors.notFound);
   }

   mountSwagger(): void {
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
      const specs = swaggerJsdoc(options);
      this.expressApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
   }
}

export default new App().expressApp;
