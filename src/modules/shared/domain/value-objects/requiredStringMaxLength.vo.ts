import { InvalidRequiredStringMaxLengthException } from '../exceptions/invalidRequiredStringMaxLength.exception';
import { Specification } from '../interfaces/specification.inteface';
import { RequiredStringSpecification } from '../specifications/requiredString.specification';
import { StringMaxLengthSpecification } from '../specifications/stringMaxLength.specification';

export class RequiredStringMaxLengthVO {
   private readonly value: string;

   private requiredStringSpec: Specification<string>;
   private stringMaxLengthSpec: Specification<string>;

   constructor(value: string, maxLength: number) {
     this.requiredStringSpec = new RequiredStringSpecification();
     this.stringMaxLengthSpec = new StringMaxLengthSpecification(maxLength);

     this.validate(value);
     this.value = value;
   }

   getValue(): string {
     return this.value;
   }

   private validate(value: string): void {
     if (!this.valueObjectSpec().isSatisfiedBy(value)) {
       throw new InvalidRequiredStringMaxLengthException();
     }
   }

   private valueObjectSpec(): Specification<string> {
     return this.requiredStringSpec.and(this.stringMaxLengthSpec);
   }

 }
