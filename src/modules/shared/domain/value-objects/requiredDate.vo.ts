import { InvalidRequiredDateException } from '../exceptions/invalidRequiredDate.exception';
import { Specification } from '../interfaces/specification.inteface';
import { RequiredDateSpecification } from '../specifications/requiredDate.specification';

export class RequiredDateVO {
   private readonly value: string;

   private readonly requiredDateSpec: Specification<string>;

   constructor(value: string) {
     this.requiredDateSpec = new RequiredDateSpecification();

     this.validate(value);
     this.value = value;
   }

   private validate(value: string): void {
     if (!this.requiredDateSpec.isSatisfiedBy(value)) {
       throw new InvalidRequiredDateException();
     }
   }

   getValue(): string {
     return this.value;
   }
 }
