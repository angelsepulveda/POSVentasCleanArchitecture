import { Uuid } from '../../../../shared/domain/value-objects/uuid.vo';

export class BrandId extends Uuid {
   constructor(value: string) {
       super(value);
    }
 }
