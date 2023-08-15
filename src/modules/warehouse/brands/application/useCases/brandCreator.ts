import { inject, injectable } from 'inversify';

import { Optional } from '../../../../shared/domain/types/optional.type';
import BrandFactory from '../../domain/brandFactory';
import { BrandRepository } from '../../domain/brandRepository';
import { BrandCreatorMapping } from '../dto/response/brandCreator.dto';

interface BrandInput {
   name: string
   description: Optional<string>
}

@injectable()
export default class BrandCreator {
   constructor(@inject('BrandRepository') private readonly brandRepository: BrandRepository){}

   async run(params : BrandInput){
      const brand = await new BrandFactory().create(params.name, params.description);

      const data = await this.brandRepository.insert(brand);

      return new BrandCreatorMapping().execute(data.properties());
   }
}
