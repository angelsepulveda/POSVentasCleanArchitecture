import { InvalidOptionalStringMaxLengthException } from '../exceptions/invalidOptionalStringMaxLength.exception';
import { Specification } from '../interfaces/specification.inteface';
import { IsStringSpecification } from '../specifications/isString.specification';
import { OptionalStringSpecification } from '../specifications/optionalString.specification';
import { StringMaxLengthSpecification } from '../specifications/stringMaxLength.specification';

export class OptionalStringMaxLengthVO {
   private readonly value: string | null | undefined;
   private optionalStringSpec: Specification<string | null | undefined>;
   private isStringSpec: Specification<string>;
   private stringMaxLengthSpec: Specification<string>;

   constructor(value: string | null | undefined, maxLength: number) {

     this.isStringSpec = new IsStringSpecification();
     this.optionalStringSpec = new OptionalStringSpecification();
     this.stringMaxLengthSpec = new StringMaxLengthSpecification(maxLength);

     this.validate(value);
     this.value = value;
   }

   getValue(): string | null | undefined {
     return this.value;
   }

   private validate(value: string | null | undefined): void {
     const isOptionalStringOk = this.optionalStringSpec.isSatisfiedBy(value);
     const isStringMaxLengthOk = this.valueObjectAndStringSpec().isSatisfiedBy(value || '');

     if (!isOptionalStringOk) {
       throw new InvalidOptionalStringMaxLengthException();
     }

     if (!isStringMaxLengthOk) {
       throw new InvalidOptionalStringMaxLengthException();
     }
   }

   private valueObjectAndStringSpec(): Specification<string> {
     return this.isStringSpec.and(this.stringMaxLengthSpec);
   }
 }
