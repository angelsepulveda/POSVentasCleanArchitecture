import { BrandActive } from '../valueObjects/brandActive.vo';
import { BrandDescription } from '../valueObjects/brandDescription.vo';
import { BrandId } from '../valueObjects/brandId.vo';

export interface BrandOptional {
   id: BrandId
   description: BrandDescription
   active: BrandActive
}
