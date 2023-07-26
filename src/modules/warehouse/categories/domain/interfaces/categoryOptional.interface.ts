import { CategoryActive } from '../value-objects/categoryActive.vo';
import { CategoryDescription } from '../value-objects/categoryDescription.vo';
import { CategoryId } from '../value-objects/categoryId.vo';

export interface CategoryOptional {
   id: CategoryId
   description: CategoryDescription
   active: CategoryActive
}
