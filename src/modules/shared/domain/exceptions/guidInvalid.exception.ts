import { DomainExceptionCode } from '../enums/domainException.enum';
import { DomainException } from './domain.exception';

export class GuidInvalidException extends DomainException {
   constructor() {
      super(GuidInvalidException.getMessage());
      this.name = DomainExceptionCode.GUID_INVALID;
   }

   static getMessage() {
      return 'Guid is invalid';
   }
}
