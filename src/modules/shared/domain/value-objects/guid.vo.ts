import { v4 } from 'uuid';

import { GuidInvalidException } from '../exceptions/guidInvalid.exception';
import { UUIDV4Specification } from '../specifications/uuidV4.specification';

export class GuidVO {
   readonly value: string;

   readonly uuidV4Spec: UUIDV4Specification;

   constructor(value: string) {
     this.uuidV4Spec = new UUIDV4Specification();

     this.validate(value);
     this.value = value;
   }

   private validate(value: string): void {
     if (!this.uuidV4Spec.isSatisfiedBy(value)) {
       throw new GuidInvalidException();
     }
   }

   getValue(): string {
     return this.value;
   }

   static create(): string {
     return v4();
   }
}
