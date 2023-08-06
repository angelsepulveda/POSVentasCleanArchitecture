import { Optional } from '../../../../shared/domain/types/optional.type';
import { CategoryDescriptionLengthInvalidException } from '../exceptions/category.exception';
import { OptionalStringVO } from './../../../../shared/domain/value-objects/optionalString.vo';

export class CategoryDescription extends OptionalStringVO {
   private static readonly MAX_LENGTH = 1024;

   constructor(value: Optional<string>){
      super(value);
      this.validateLengthNotExceedsMaxCharacters(value);
   }

   private validateLengthNotExceedsMaxCharacters(value: Optional<string>) {
      if (value && value.length > CategoryDescription.MAX_LENGTH) {
         throw new CategoryDescriptionLengthInvalidException(`The description should not exceed ${CategoryDescription.MAX_LENGTH} characters`);
      }
   }
}






