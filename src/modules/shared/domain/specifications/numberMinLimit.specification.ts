import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class NumberMinLimitSpecification implements Specification<number> {
   private readonly minLimit: number;

   constructor(minLimit: number) {
     this.minLimit = minLimit;
   }

   isSatisfiedBy(candidate: number): boolean {
     return candidate >= this.minLimit;
   }

   and(spec: Specification<number>): Specification<number> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<number>): Specification<number> {
     return new OrSpecification(this, spec);
   }

 }
