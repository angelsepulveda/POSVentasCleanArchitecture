import { inject, injectable } from 'inversify';

import { CategoryRepository } from '../../domain/category.repository';
import { CategoryId } from '../../domain/value-objects/categoryId.vo';
import { CategoryDeleterDTO, CategoryDeleterMapping } from '../dto/response/categoryDeleter.dto';

@injectable()
export default class CategoryDeleter {
   constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository){}

   async run(id: string): Promise<CategoryDeleterDTO>{

      const category = await this.categoryRepository.delete(new CategoryId(id));

      return new CategoryDeleterMapping().execute(category.properties());

   }
}
