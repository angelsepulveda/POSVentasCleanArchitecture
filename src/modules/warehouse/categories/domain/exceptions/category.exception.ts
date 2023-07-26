import { DomainException } from '../../../../shared/domain/exceptions/domain.exception';
import { CategoryExceptionCode } from '../enums/categoryException.enum';

export class CategoryNameRequiredException extends DomainException {
   constructor() {
      super(CategoryNameRequiredException.getMessage());
      this.name = CategoryExceptionCode.CATEGORY_NAME_REQUIRED;
   }

   static getMessage() {
      return 'Name is required';
   }
}

export class CategoryNameLengthInvalidException extends DomainException {
   constructor(value: string) {
      super(CategoryNameLengthInvalidException.getMessage(value));
      this.name = CategoryExceptionCode.CATEGORY_NAME_LENGTH_INVALID;
   }

   static getMessage(value: string) {
      return `Name must not exceed 50 characters, but '${value}' contains ${value.length}`;
   }
}

export class CategoryDescriptionLengthInvalidException extends DomainException {
   constructor(value: string) {
      super(CategoryDescriptionLengthInvalidException.getMessage(value));
      this.name = CategoryExceptionCode.CATEGORY_DESCRIPTION_LENGTH_INVALID;
   }

   static getMessage(value: string) {
      return `Description must not exceed 256 characters, but '${value}' contains ${value.length}`;
   }
}

export class CategoryNotFoundException extends DomainException {
   constructor() {
      super(CategoryNotFoundException.getMessage());
      this.name = CategoryExceptionCode.CATEGORY_NOT_FOUND;
   }

   static getMessage() {
      return 'Category not found';
   }
}
