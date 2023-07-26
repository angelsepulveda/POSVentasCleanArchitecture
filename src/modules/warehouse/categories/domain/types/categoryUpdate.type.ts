import { CategoryDescription } from '../value-objects/CategoryDescription.vo';
import { CategoryName } from '../value-objects/categoryName.vo';

export type CategoryUpdate = {
   name: CategoryName
   description: CategoryDescription
}
