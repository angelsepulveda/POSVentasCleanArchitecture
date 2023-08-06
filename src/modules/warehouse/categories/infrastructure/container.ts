import { ContainerModule } from 'inversify';

import CategoryCreator from '../application/usesCases/categoryCreator';
import CategoryDeleter from '../application/usesCases/categoryDeleter';
import CategoryFinder from '../application/usesCases/categoryFinder';
import CategoryLister from '../application/usesCases/categoryLister';
import CategoryUpdater from '../application/usesCases/categoryUpdater';
import { CategoryRepository } from '../domain/categoryRepository';
import CategoryCreatorController from '../interfaces/http/controllers/categoryCreator.controller';
import CategoryDeleterController from '../interfaces/http/controllers/categoryDeleter.controller';
import CategoryFinderController from '../interfaces/http/controllers/categoryFinder.controller';
import CategoryListerController from '../interfaces/http/controllers/categoryLister.controller';
import CategoryUpdaterController from '../interfaces/http/controllers/categoryUpdater.controller';
import CategoryTypeORMRepository from './categoryTypeORM.repository';

//registro de dependencias
export const CategoryContainer = new ContainerModule(bind => {
   bind<CategoryRepository>('CategoryRepository').to(CategoryTypeORMRepository);
   bind<CategoryCreator>(CategoryCreator).toSelf();
   bind<CategoryCreatorController>(CategoryCreatorController).toSelf();
   bind<CategoryLister>(CategoryLister).toSelf();
   bind<CategoryListerController>(CategoryListerController).toSelf();
   bind<CategoryFinder>(CategoryFinder).toSelf();
   bind<CategoryFinderController>(CategoryFinderController).toSelf();
   bind<CategoryUpdater>(CategoryUpdater).toSelf();
   bind<CategoryUpdaterController>(CategoryUpdaterController).toSelf();
   bind<CategoryDeleter>(CategoryDeleter).toSelf();
   bind<CategoryDeleterController>(CategoryDeleterController).toSelf();
});
