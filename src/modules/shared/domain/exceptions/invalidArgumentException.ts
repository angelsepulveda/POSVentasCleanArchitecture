import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class InvalidArgumentException extends DomainException {
   constructor() {
      super(InvalidArgumentException.getMessage());
      this.name = DomainExceptionCode.INVALID_ARGUMENT;
   }

   static getMessage() {
      return 'Value must be defined';
   }
}
