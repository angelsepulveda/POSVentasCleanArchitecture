import { CategoryNameLengthInvalidException } from '../exceptions/category.exception';
import { requiredStringVO } from './../../../../shared/domain/value-objects/requiredString.vo';


export class CategoryName extends requiredStringVO {
   private static readonly MAX_LENGTH = 50;
   constructor(value: string){
      super(value);
   }

   private validateLengthNotExceedsMaxCharacters(value: string) {
      if (value.length > CategoryName.MAX_LENGTH) {
         throw new CategoryNameLengthInvalidException(`The name should not exceed ${CategoryName.MAX_LENGTH} characters`);
      }
   }
}
