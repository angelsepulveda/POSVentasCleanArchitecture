import { Uuid } from '../../../../shared/domain/value-objects/uuid.vo';


export class CategoryId extends Uuid {
  constructor(value: string) {
      super(value);
   }
}
