import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidNumberException extends DomainException {
   constructor() {
      super(InvalidNumberException.getMessage());
      this.name = DomainExceptionCode.INVALID_NUMBER;
   }

   static getMessage() {
      return 'Invalid number value';
   }
}
