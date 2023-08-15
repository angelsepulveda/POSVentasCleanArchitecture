import { v4 as uuidv4 } from 'uuid';

import Brand from './brand';
import { BrandProperties } from './types/brandProperties.type';
import { BrandActive } from './valueObjects/brandActive.vo';
import { BrandDescription } from './valueObjects/brandDescription.vo';
import { BrandId } from './valueObjects/brandId.vo';
import { BrandName } from './valueObjects/brandName.vo';

export default class BrandFactory {
   async create(name: string, description: string | null | undefined): Promise<Brand> {

      const brandProperties: BrandProperties = {
         name: new BrandName(name),
         id: new BrandId(uuidv4()),
         description: new BrandDescription(description),
         active: new BrandActive(true)
      };

      const brand = new Brand(brandProperties);

      return brand;
   }
}
