import { InvalidBooleanException } from '../exceptions/invalidBoolean.exception';
import { Specification } from '../interfaces/specification.inteface';
import { IsBooleanSpecification } from '../specifications/isBoolean.specification';

export class RequiredBooleanVO {
  readonly value: boolean;

  readonly isBooleanSpec: Specification<boolean>;

  constructor(value: boolean) {
    this.isBooleanSpec = new IsBooleanSpecification();

    this.validate(value);
    this.value = value;
  }

  private validate(value: boolean): void {
    if (!this.valueObjectSpec().isSatisfiedBy(value)) {
      throw new InvalidBooleanException();
    }
  }

  private valueObjectSpec(): Specification<boolean> {
    return this.isBooleanSpec;
  }

  getValue(): boolean {
    return this.value;
  }
}
