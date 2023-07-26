import { RequiredBooleanVO } from '../../../../shared/domain/value-objects/requiredBoolean.vo';

export class CategoryActive extends RequiredBooleanVO {
   constructor(value: boolean){
      super(value);
   }
}
