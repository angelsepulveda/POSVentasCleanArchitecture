import Category from '../domain/category';
import { CategoryActive } from '../domain/value-objects/categoryActive.vo';
import { CategoryDescription } from '../domain/value-objects/categoryDescription.vo';
import { CategoryId } from '../domain/value-objects/categoryId.vo';
import { CategoryName } from './../domain/value-objects/categoryName.vo';
import { CategoryEntity } from './category.entity';

export default class CategoryMapper {
   static toDomain(categoryEntity: CategoryEntity): Category {
      return new Category({
        id: new CategoryId(categoryEntity.guid),
        name: new CategoryName(categoryEntity.name),
        description: new CategoryDescription(categoryEntity.description),
        active: new CategoryActive(categoryEntity.active),
      });
    }

    static toEntity(category: Category): CategoryEntity {
      const categoryInsert = new CategoryEntity();

      const { id, name, description, active } = category.toPrimitives();

      Object.assign(categoryInsert, {
        guid: id,
        name,
        description,
        active,
      });

      return categoryInsert;
    }
}
