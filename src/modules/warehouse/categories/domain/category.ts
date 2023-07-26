import { IEntity } from '../../../shared/domain/interfaces/entity.interface';
import { CategoryPrimitive } from './types/categoryPrimitive.type';
import { CategoryProperties } from './types/categoryProperties.type';
import { CategoryUpdate } from './types/categoryUpdate.type';
import { CategoryActive } from './value-objects/categoryActive.vo';
import { CategoryDescription } from './value-objects/categoryDescription.vo';
import { CategoryId } from './value-objects/categoryId.vo';
import { CategoryName } from './value-objects/categoryName.vo';

export default class Category implements IEntity<CategoryProperties,CategoryUpdate,CategoryPrimitive> {
   private id: CategoryId;
   private name: CategoryName;
   private description: CategoryDescription;
   private active: CategoryActive;

   constructor(categoryProperties: CategoryProperties) {
      this.active = new CategoryActive(true);
      Object.assign(this, categoryProperties);
   }

   toPrimitives(): CategoryPrimitive {
      return {
         id: this.id.getValue(),
         name: this.name.getValue(),
         description: this.description.getValue(),
         active: this.active.getValue()
      };
   }

   properties(): CategoryProperties {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         active: this.active
      };
   }


   delete(): void{
      this.active = new CategoryActive(false);
   }

   update(fields: CategoryUpdate): void {
      Object.assign(this, fields);
   }

}
