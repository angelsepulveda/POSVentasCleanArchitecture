import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { BrandProperties } from '../../../domain/types/brandProperties.type';
import { BrandDTO } from './brand.dto';

export type BrandListerDTO = BrandDTO[]

export class BrandListerMapping extends DTO<BrandProperties[], BrandListerDTO> {
   execute(data: BrandProperties[]): BrandListerDTO {
      return data.map((category: BrandProperties) => {
         return {
            name: category.name.value,
            description: category.description.value,
            id: category.id.value,
         };
      });
   }
}
