import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class IsStringSpecification implements Specification<string> {
   isSatisfiedBy(value: string): boolean {
     return typeof value === 'string';
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }
 }
