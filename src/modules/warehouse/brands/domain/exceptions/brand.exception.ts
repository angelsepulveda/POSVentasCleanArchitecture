import { DomainException } from '../../../../shared/domain/exceptions/domain.exception';
import { BrandExceptionCode } from '../enums/brandException.enum';

export class BrandNameRequiredException extends DomainException {
   constructor() {
      super(BrandNameRequiredException.getMessage());
      this.name = BrandExceptionCode.BRAND_NAME_REQUIRED;
   }

   static getMessage() {
      return 'Name is required';
   }
}

export class BrandNameLengthInvalidException extends DomainException {
   constructor(value: string) {
      super(BrandNameLengthInvalidException.getMessage(value));
      this.name = BrandExceptionCode.BRAND_NAME_LENGTH_INVALID;
   }

   static getMessage(value: string) {
      return `Name must not exceed 50 characters, but '${value}' contains ${value.length}`;
   }
}

export class BrandDescriptionLengthInvalidException extends DomainException {
   constructor(value: string) {
      super(BrandDescriptionLengthInvalidException.getMessage(value));
      this.name = BrandExceptionCode.BRAND_DESCRIPTION_LENGTH_INVALID;
   }

   static getMessage(value: string) {
      return `Description must not exceed 1024 characters, but '${value}' contains ${value.length}`;
   }
}

export class BrandNotFoundException extends DomainException {
   constructor() {
      super(BrandNotFoundException.getMessage());
      this.name = BrandExceptionCode.BRAND_NOT_FOUND;
   }

   static getMessage() {
      return 'Brand not found';
   }
}
