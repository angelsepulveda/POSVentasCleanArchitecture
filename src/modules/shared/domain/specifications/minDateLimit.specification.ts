import { DateTime } from 'luxon';

import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class MinDateLimitSpecification implements Specification<string> {
   private readonly minDateLimit: string;

   constructor(minDateLimit: string) {
     this.minDateLimit = minDateLimit;
   }
   isSatisfiedBy(candidate: string): boolean {
     return DateTime.fromISO(candidate) >= DateTime.fromISO(this.minDateLimit);
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }

 }
