import { CategoryDescription } from '../value-objects/categoryDescription.vo';
import { CategoryName } from '../value-objects/categoryName.vo';

export type CategoryUpdate = {
   name: CategoryName
   description: CategoryDescription
}
