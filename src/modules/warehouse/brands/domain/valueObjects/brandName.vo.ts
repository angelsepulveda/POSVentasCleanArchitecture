import { BrandNameLengthInvalidException } from '../exceptions/brand.exception';
import { RequiredStringVO } from './../../../../shared/domain/value-objects/requiredString.vo';

export class BrandName extends RequiredStringVO {
   static readonly MAX_LENGTH = 50;
   constructor(value: string){
      super(value);
      this.validateLengthNotExceedsMaxCharacters(value);
   }

   private validateLengthNotExceedsMaxCharacters(value: string) {
      if (value.length > BrandName.MAX_LENGTH) {
         throw new BrandNameLengthInvalidException(`The name should not exceed ${BrandName.MAX_LENGTH} characters`);
      }
   }
}
