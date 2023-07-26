import { Result } from 'neverthrow';

import Category from '../category';
import { CategoryDescriptionLengthInvalidException, CategoryNameLengthInvalidException, CategoryNameRequiredException } from '../exceptions/category.exception';

export type CategoryResult = Result<
   Category,
   | CategoryNameRequiredException
   | CategoryNameLengthInvalidException
   | CategoryDescriptionLengthInvalidException
>
