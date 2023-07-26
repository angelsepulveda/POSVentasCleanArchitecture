import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidRequiredStringMaxLengthException extends DomainException {

   constructor() {
      super(InvalidRequiredStringMaxLengthException.getMessage());
      this.name = DomainExceptionCode.INVALID_REQUIRED_STRING_MAX_LENGTH;
   }

   static getMessage() {
      return 'Invalid required string value';
   }
}

