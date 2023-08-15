import { BrandOptional } from '../interfaces/brandOptional.interface';
import { BrandRequired } from '../interfaces/brandRequired.interface';

export type BrandProperties = Required<BrandRequired> & Partial<BrandOptional>
