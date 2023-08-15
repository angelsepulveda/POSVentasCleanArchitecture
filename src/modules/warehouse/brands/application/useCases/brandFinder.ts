import { inject, injectable } from 'inversify';

import { BrandRepository } from '../../domain/brandRepository';
import { BrandId } from '../../domain/valueObjects/brandId.vo';
import { BrandFinderDTO, BrandFinderMapping } from '../dto/response/brandFinder.dto';

@injectable()
export default class BrandFinder {
   constructor(@inject('BrandRepository') private readonly brandRepository: BrandRepository){}

   async run(id: string): Promise<BrandFinderDTO>{

      const brand = await this.brandRepository.listOne(new BrandId(id));

      return new BrandFinderMapping().execute(brand.properties());

   }
}
