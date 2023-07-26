import { inject, injectable } from 'inversify';

import { CategoryRepository } from '../../domain/category.repository';
import { CategoryId } from '../../domain/value-objects/categoryId.vo';
import { CategoryFinderDTO, CategoryFinderMapping } from '../dto/response/categoryFinder.dto';

@injectable()
export default class CategoryFinder {
   constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository){}

   async run(id: string): Promise<CategoryFinderDTO>{

      const category = await this.categoryRepository.listOne(new CategoryId(id));

      return new CategoryFinderMapping().execute(category.properties());

   }
}
