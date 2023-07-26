import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class NumberMaxLimitSpecification implements Specification<number> {
   private readonly maxLimit: number;

   constructor(maxLimit: number) {
     this.maxLimit = maxLimit;
   }

   isSatisfiedBy(candidate: number): boolean {
     return candidate <= this.maxLimit;
   }

   and(spec: Specification<number>): Specification<number> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<number>): Specification<number> {
     return new OrSpecification(this, spec);
   }

 }
