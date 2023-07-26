import { inject, injectable } from 'inversify';

import { CategoryRepository } from '../../domain/category.repository';
import { CategoryListerDTO, CategoryListerMapping } from '../dto/response/categoryLister.dto';

@injectable()
export default class CategoryLister {
   constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository){}

   async run(): Promise<CategoryListerDTO>{

      const data = await this.categoryRepository.list();

      return new CategoryListerMapping().execute(data.map(category => category.properties()));
   }
}
