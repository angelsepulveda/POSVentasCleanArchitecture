import { Optional } from '../../../../shared/domain/types/optional.type';
import { BrandDescriptionLengthInvalidException } from '../exceptions/brand.exception';
import { OptionalStringVO } from './../../../../shared/domain/value-objects/optionalString.vo';

export class BrandDescription extends OptionalStringVO {
    static readonly MAX_LENGTH = 1024;

   constructor(value: Optional<string>){
      super(value);
      this.validateLengthNotExceedsMaxCharacters(value);
   }

   private validateLengthNotExceedsMaxCharacters(value: Optional<string>) {
      if (value && value.length > BrandDescription.MAX_LENGTH) {
         throw new BrandDescriptionLengthInvalidException(`The description should not exceed ${BrandDescription.MAX_LENGTH} characters`);
      }
   }
}
