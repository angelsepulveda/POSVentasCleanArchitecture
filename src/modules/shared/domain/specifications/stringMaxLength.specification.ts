import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class StringMaxLengthSpecification implements Specification<string> {
   private readonly maxLength: number;
   constructor(maxLength: number) {
     this.maxLength = maxLength;
   }
   isSatisfiedBy(candidate: string): boolean {
     return typeof candidate === 'string' && candidate.length <= this.maxLength;
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }
 }
