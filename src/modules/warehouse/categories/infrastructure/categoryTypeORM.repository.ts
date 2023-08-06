import { injectable } from 'inversify';

import DatabaseBootstrap from '../../../../bootstrap/database.bootstrap';
import Category from '../domain/category';
import { CategoryRepository } from '../domain/categoryRepository';
import { CategoryNotFoundException } from '../domain/exceptions/category.exception';
import { CategoryUpdate } from '../domain/types/categoryUpdate.type';
import { CategoryId } from './../domain/value-objects/categoryId.vo';
import { CategoryEntity } from './category.entity';
import CategoryMapper from './category.mapper';

@injectable()
export default class CategoryTypeORMRepository implements CategoryRepository {
   async list (): Promise<Category[]> {
      const repo = DatabaseBootstrap.dataSource.getRepository(CategoryEntity);
      const result = await repo.find({ where: { active: true } });
      return result.map((el) => CategoryMapper.toDomain(el));
   }

   async listOne (id: CategoryId): Promise<Category> {
      const repo = DatabaseBootstrap.dataSource.getRepository(CategoryEntity);
      const result = await repo.findOne({ where: { guid: id.value } });
      if (!result) {
         throw new CategoryNotFoundException();
      }

      return CategoryMapper.toDomain(result);
   }

   async insert (category: Category): Promise<Category> {
      const repo = DatabaseBootstrap.dataSource.getRepository(CategoryEntity);
      const categoryInsert = new CategoryEntity();

      const { id, name, description, active } = category.properties();

      Object.assign(categoryInsert, {
         guid: id.value,
         name,
         description,
         active,
      });

      await repo.save(categoryInsert);

      return category;
   }
   async update (id: CategoryId, category: Partial<CategoryUpdate>): Promise<Category> {
      const repo = DatabaseBootstrap.dataSource.getRepository(CategoryEntity);
      const categoryFound = await repo.findOne({ where: { guid: id.value } });

      if (!categoryFound) {
         throw new CategoryNotFoundException();
      }

      Object.assign(categoryFound, category);

      const categoryEntity = await repo.save(categoryFound);

      return CategoryMapper.toDomain(categoryEntity);

   }

   async delete (id: CategoryId): Promise<Category> {
      const repo = DatabaseBootstrap.dataSource.getRepository(CategoryEntity);
      const categoryFound = await repo.findOne({
         where: { guid: id.value },
      });

      if (!categoryFound) {
         throw new CategoryNotFoundException();
      }

      categoryFound.active = false;

      const categoryEntity = await repo.save(categoryFound);

      return CategoryMapper.toDomain(categoryEntity);
   }
}
