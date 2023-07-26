import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class IsNumberSpecification implements Specification<number> {
   isSatisfiedBy(candidate: number): boolean {
     return typeof candidate === 'number' && Number.isInteger(candidate);
   }

   and(spec: Specification<number>): Specification<number> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<number>): Specification<number> {
     return new OrSpecification(this, spec);
   }

 }
