import dotenv from 'dotenv';

dotenv.config();

import { CategoryEntity  } from '../../modules/warehouse/categories/infrastructure/category.entity';


export class AppService {
   static get PORT(): number {
      return parseInt(process.env.PORT) || 3000;
   }

   static get DBConfig() {
      const pass = process.env.DB_PASS;
      return {
         host: process.env.DB_HOST || 'localhost',
         port: +process.env.DB_PORT || 3310,
         entities: [CategoryEntity],
         //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: process.env.DB_USER || 'user',
         password: pass || '12345',
         database: process.env.DB_NAME || 'bddcursonode',
         synchronize: process.env.DB_SYNC === 'true',
         logging: process.env.DB_LOG === 'true'
      };
   }
}
