import { RequiredBooleanVO } from '../../../../shared/domain/value-objects/requiredBoolean.vo';

export class BrandActive extends RequiredBooleanVO {
   constructor(value: boolean){
      super(value);
   }
}
