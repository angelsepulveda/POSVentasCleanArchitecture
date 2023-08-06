import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class UuidInvalidException extends DomainException {
   constructor() {
      super(UuidInvalidException.getMessage());
      this.name = DomainExceptionCode.UUID_INVALID;
   }

   static getMessage() {
      return 'Uuid is invalid';
   }
}
