import { DateTime } from 'luxon';

import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class MaxDateLimitSpecification implements Specification<string> {
   private readonly maxDateLimit: string;

   constructor(maxDateLimit: string) {
     this.maxDateLimit = maxDateLimit;
   }
   isSatisfiedBy(candidate: string): boolean {
     return DateTime.fromISO(candidate) <= DateTime.fromISO(this.maxDateLimit);
   }

   and(spec: Specification<string>): Specification<string> {
     return new AndSpecification(this, spec);
   }

   or(spec: Specification<string>): Specification<string> {
     return new OrSpecification(this, spec);
   }

 }
