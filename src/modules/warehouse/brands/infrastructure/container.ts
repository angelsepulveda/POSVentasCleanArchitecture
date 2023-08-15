import { ContainerModule } from 'inversify';

import BrandCreator from '../application/useCases/brandCreator';
import BrandDeleter from '../application/useCases/brandDeleter';
import BrandFinder from '../application/useCases/brandFinder';
import BrandLister from '../application/useCases/brandLister';
import BrandUpdater from '../application/useCases/brandUpdater';
import { BrandRepository } from '../domain/brandRepository';
import BrandCreatorController from '../interfaces/http/controllers/brandCreator.controller';
import BrandDeleterController from '../interfaces/http/controllers/brandDeleter.controller';
import BrandFinderController from '../interfaces/http/controllers/brandFinder.controller';
import BrandListerController from '../interfaces/http/controllers/brandLister.controller';
import BrandUpdaterController from '../interfaces/http/controllers/brandUpdater.controller';
import BrandTypeORMRepository from './database/brandTypeORM.repository';

export const BrandContainer = new ContainerModule(bind => {
   bind<BrandRepository>('BrandRepository').to(BrandTypeORMRepository);
   bind<BrandCreator>(BrandCreator).toSelf();
   bind<BrandCreatorController>(BrandCreatorController).toSelf();
   bind<BrandLister>(BrandLister).toSelf();
   bind<BrandListerController>(BrandListerController).toSelf();
   bind<BrandFinder>(BrandFinder).toSelf();
   bind<BrandFinderController>(BrandFinderController).toSelf();
   bind<BrandUpdater>(BrandUpdater).toSelf();
   bind<BrandUpdaterController>(BrandUpdaterController).toSelf();
   bind<BrandDeleter>(BrandDeleter).toSelf();
   bind<BrandDeleterController>(BrandDeleterController).toSelf();
});
