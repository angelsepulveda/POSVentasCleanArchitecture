import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class OptionalStringSpecification implements Specification<string | null | undefined> {
   isSatisfiedBy(candidate: string | null | undefined): boolean {
     return (
       typeof candidate === 'string' ||
       typeof candidate === 'undefined' ||
       candidate === null
     );
   }

   and(spec: Specification<string | null | undefined>): Specification<string | null | undefined> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string | null | undefined>): Specification<string | null | undefined> {
     return new OrSpecification(this, spec);
   }
 }
