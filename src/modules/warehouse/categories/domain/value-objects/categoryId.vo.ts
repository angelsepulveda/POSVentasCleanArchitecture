import { GuidVO } from '../../../../shared/domain/value-objects/guid.vo';

export class CategoryId extends GuidVO {
  constructor(value: string) {
      super(value);
   }
}
