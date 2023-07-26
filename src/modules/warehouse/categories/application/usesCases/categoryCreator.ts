import { inject, injectable } from 'inversify';

import { CategoryRepository } from '../../domain/category.repository';
import CategoryFactory from '../../domain/categoryFactory';
import { CategoryCreatorMapping } from '../dto/response/categoryCreator.dto';

interface CategoryInput {
   name: string
   description: string | null | undefined
}

@injectable()
export default class CategoryCreator {
   constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository){}

   async run(params : CategoryInput){
      const category = await new CategoryFactory().create(params.name, params.description);

      const data = await this.categoryRepository.insert(category);

      return new CategoryCreatorMapping().execute(data.properties());
   }
}

