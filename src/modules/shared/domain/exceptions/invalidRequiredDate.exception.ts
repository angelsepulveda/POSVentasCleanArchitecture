import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidRequiredDateException extends DomainException {
   constructor() {
      super(InvalidRequiredDateException.getMessage());
      this.name = DomainExceptionCode.INVALID_REQUIRED_DATE;
   }

   static getMessage() {
      return 'Invalid required date value';
   }
}
