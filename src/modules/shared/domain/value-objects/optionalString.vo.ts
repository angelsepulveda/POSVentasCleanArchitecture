import { Optional } from '../types/optional.type';
import { ValueObject } from './valueObject';

export class OptionalStringVO extends ValueObject<Optional<string>> {
   constructor(value: Optional<string>){
      super(value);
   }
}
