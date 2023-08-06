import { ValueObject } from './valueObject';

export class RequiredBooleanVO extends ValueObject<boolean> {
   constructor(value: boolean){
      super(value);
   }
}
