import { ValueObject } from './valueObject';

export class requiredStringVO extends ValueObject<string> {
    constructor(value: string){
      super(value);
    }
}
