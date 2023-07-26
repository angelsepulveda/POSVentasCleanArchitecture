import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';
import { IsStringSpecification } from './isString.specification';

export class RequiredStringSpecification implements Specification<string> {
   private readonly isStringSpec: Specification<string>;

   constructor() {
     this.isStringSpec = new IsStringSpecification();
   }
   isSatisfiedBy(value: string): boolean {
     return this.isStringSpec.isSatisfiedBy(value) && value.trim().length > 0;
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }
 }
