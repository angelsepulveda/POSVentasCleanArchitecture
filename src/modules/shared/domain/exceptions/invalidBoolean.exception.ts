import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidBooleanException extends DomainException {
   constructor() {
      super(InvalidBooleanException.getMessage());
      this.name = DomainExceptionCode.INVALID_BOOLEAN;
   }

   static getMessage() {
      return 'Invalid boolean value';
   }
}
