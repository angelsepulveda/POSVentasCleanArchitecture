import { Result } from 'neverthrow';

import { GuidInvalidException } from '../exceptions/guidInvalid.exception';
import { GuidVO } from '../value-objects/guid.vo';

export type GuidResult = Result<GuidVO, GuidInvalidException>
