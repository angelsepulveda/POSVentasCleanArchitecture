import { OptionalStringMaxLengthVO } from '../../../../shared/domain/value-objects/optionalStringMaxLength.vo';

export class CategoryDescription extends OptionalStringMaxLengthVO {
   constructor(value: string | null | undefined){
      super(value,256);
   }
}
