import { RequiredStringMaxLengthVO } from '../../../../shared/domain/value-objects/requiredStringMaxLength.vo';


export class CategoryName extends RequiredStringMaxLengthVO {
   constructor(value: string){
      super(value, 50);
   }
}
