import { inject, injectable } from 'inversify';

import { BrandRepository } from '../../domain/brandRepository';
import { BrandId } from '../../domain/valueObjects/brandId.vo';
import { BrandDeleterDTO, BrandDeleterMapping } from '../dto/response/brandDeleter.dto';

@injectable()
export default class BrandDeleter {
   constructor(@inject('BrandRepository') private readonly brandRepository: BrandRepository){}

   async run(id: string): Promise<BrandDeleterDTO>{

      const brand = await this.brandRepository.delete(new BrandId(id));

      return new BrandDeleterMapping().execute(brand.properties());

   }
}
