import { IEntity } from '../../../shared/domain/interfaces/entity.interface';
import { BrandPrimitive } from './types/brandPrimitive.type';
import { BrandProperties } from './types/brandProperties.type';
import { BrandUpdate } from './types/brandUpdate.type';
import { BrandActive } from './valueObjects/brandActive.vo';
import { BrandDescription } from './valueObjects/brandDescription.vo';
import { BrandId } from './valueObjects/brandId.vo';
import { BrandName } from './valueObjects/brandName.vo';

export default class Brand implements IEntity<BrandProperties,BrandUpdate,BrandPrimitive> {
   private id: BrandId;
   private name: BrandName;
   private description: BrandDescription;
   private active: BrandActive;

   constructor(brandProperties: BrandProperties) {
      this.active = new BrandActive(true);
      Object.assign(this, brandProperties);
   }

   toPrimitives(): BrandPrimitive {
      return {
         id: this.id.value,
         name: this.name.value,
         description: this.description.value,
         active: this.active.value
      };
   }

   properties(): BrandProperties {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         active: this.active
      };
   }


   delete(): void{
      this.active = new BrandActive(false);
   }

   update(fields: BrandUpdate): void {
      Object.assign(this, fields);
   }

}
