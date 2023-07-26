import { validate } from 'email-validator';

import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class EmailSpecification implements Specification<string> {
   isSatisfiedBy(candidate: string): boolean {
     return validate(candidate);
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }
 }
