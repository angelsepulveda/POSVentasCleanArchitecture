import { CategoryOptional } from '../interfaces/categoryOptional.interface';
import { CategoryRequired } from '../interfaces/categoryRequired.interface';

export type CategoryProperties = Required<CategoryRequired> & Partial<CategoryOptional>
