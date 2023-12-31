import { DataSource } from 'typeorm';

import { Bootstrap } from './base.bootstrap';
import { DB_CONFIG } from './interfaces/dbConfig.interface';
import { AppService } from './services/app.service';

let appDataSource: DataSource;

export default class extends Bootstrap{
   initialize(): Promise<DataSource> {
      const dbConfig: DB_CONFIG = AppService.DBConfig;
      const AppDataSource = new DataSource({
        type: 'mysql',
        ...dbConfig,
      });

      appDataSource = AppDataSource;

      return AppDataSource.initialize();
    }

    static get dataSource(): DataSource {
      return appDataSource;
    }
}
