import Category from './category';
import { CategoryUpdate } from './types/categoryUpdate.type';
import { CategoryId } from './value-objects/categoryId.vo';

export interface CategoryRepository {
   list(): Promise<Category[]>
   listOne(id: CategoryId): Promise<Category>
   insert(category: Category): Promise<Category>
   update(id: CategoryId, category: Partial<CategoryUpdate>): Promise<Category>
   delete(id: CategoryId): Promise<Category>
}
