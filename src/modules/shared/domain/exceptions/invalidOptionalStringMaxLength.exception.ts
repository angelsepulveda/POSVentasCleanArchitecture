import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidOptionalStringMaxLengthException extends DomainException {
   constructor() {
      super(InvalidOptionalStringMaxLengthException.getMessage());
      this.name = DomainExceptionCode.INVALID_OPTIONAL_STRING_MAX_LENGTH;
   }

   static getMessage() {
      return 'Invalid optional string value';
   }
}
