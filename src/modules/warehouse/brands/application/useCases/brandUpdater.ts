import { inject, injectable } from 'inversify';

import { Optional } from '../../../../shared/domain/types/optional.type';
import { BrandRepository } from '../../domain/brandRepository';
import { BrandUpdate } from '../../domain/types/brandUpdate.type';
import { BrandDescription } from '../../domain/valueObjects/brandDescription.vo';
import { BrandId } from '../../domain/valueObjects/brandId.vo';
import { BrandName } from '../../domain/valueObjects/brandName.vo';
import { BrandUpdaterDTO, BrandUpdaterMapping } from '../dto/response/brandUpdater.dto';

interface BrandInput {
   id: string
   name: string
   description: Optional<string>
}

@injectable()
export default class BrandUpdater {
   constructor(@inject('BrandRepository') private readonly categoryRepository: BrandRepository){}

   async run(params: BrandInput): Promise<BrandUpdaterDTO>{

      const brandUpdate: BrandUpdate = {
         name: new BrandName(params.name),
         description: new BrandDescription(params.description)
      };

      const data = await this.categoryRepository.update(new BrandId(params.id), brandUpdate);

      return new BrandUpdaterMapping().execute(data.properties());

   }

}
