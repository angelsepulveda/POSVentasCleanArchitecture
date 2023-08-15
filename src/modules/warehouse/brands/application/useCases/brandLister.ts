import { inject, injectable } from 'inversify';

import { BrandRepository } from '../../domain/brandRepository';
import { BrandListerDTO, BrandListerMapping } from '../dto/response/BrandLister.dto';

@injectable()
export default class BrandLister {
   constructor(@inject('BrandRepository') private readonly brandRepository: BrandRepository){}

   async run(): Promise<BrandListerDTO>{

      const data = await this.brandRepository.list();

      return new BrandListerMapping().execute(data.map(brand => brand.properties()));
   }
}
