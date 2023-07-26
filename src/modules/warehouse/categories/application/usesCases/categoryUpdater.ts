import { inject, injectable } from 'inversify';

import { CategoryRepository } from '../../domain/category.repository';
import { CategoryUpdate } from '../../domain/types/categoryUpdate.type';
import { CategoryDescription } from '../../domain/value-objects/CategoryDescription.vo';
import { CategoryId } from '../../domain/value-objects/categoryId.vo';
import { CategoryUpdaterDTO, CategoryUpdaterMapping } from '../dto/response/categoryUpdater.dto';
import { CategoryName } from './../../domain/value-objects/categoryName.vo';

interface CategoryInput {
   id: string
   name: string
   description: string | null | undefined
}

@injectable()
export default class CategoryUpdater {
   constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository){}

   async run(params: CategoryInput): Promise<CategoryUpdaterDTO>{

      const categoryUpdate: CategoryUpdate = {
         name: new CategoryName(params.name),
         description: new CategoryDescription(params.description)
      };

      const data = await this.categoryRepository.update(new CategoryId(params.id), categoryUpdate);

      return new CategoryUpdaterMapping().execute(data.properties());

   }

}
