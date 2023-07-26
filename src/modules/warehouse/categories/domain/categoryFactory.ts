import { v4 as uuidv4 } from 'uuid';

import Category from './category';
import { CategoryProperties } from './types/categoryProperties.type';
import { CategoryActive } from './value-objects/categoryActive.vo';
import { CategoryDescription } from './value-objects/CategoryDescription.vo';
import { CategoryId } from './value-objects/categoryId.vo';
import { CategoryName } from './value-objects/categoryName.vo';

export default class CategoryFactory {
   async create(name: string, description: string | null | undefined): Promise<Category> {

      const categoryProperties: CategoryProperties = {
         name: new CategoryName(name),
         id: new CategoryId(uuidv4()),
         description: new CategoryDescription(description),
         active: new CategoryActive(true)
      };

      const category = new Category(categoryProperties);

      return category;
   }
}
