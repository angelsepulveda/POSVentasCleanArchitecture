import { ValueObject } from './valueObject';

export class RequiredStringVO extends ValueObject<string> {
    constructor(value: string){
      super(value);
    }
}
