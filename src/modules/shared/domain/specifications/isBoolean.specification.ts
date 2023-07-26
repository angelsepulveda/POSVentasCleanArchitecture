import { Specification } from '../interfaces/specification.inteface';
import { AndSpecification } from './composite/and.specification';
import { OrSpecification } from './composite/or.specification';

export class IsBooleanSpecification implements Specification<boolean>{

   isSatisfiedBy(value: boolean): boolean {
      return typeof value === 'boolean';
   }

   and (spec: Specification<boolean>): Specification<boolean> {
      return new AndSpecification(this, spec);
   }
   or (spec: Specification<boolean>): Specification<boolean> {
      return new OrSpecification(this, spec);
   }

}
