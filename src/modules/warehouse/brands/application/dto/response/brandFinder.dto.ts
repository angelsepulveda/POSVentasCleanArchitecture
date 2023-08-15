import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { BrandProperties } from '../../../domain/types/brandProperties.type';
import { BrandDTO } from './brand.dto';

export type BrandFinderDTO = BrandDTO

export class BrandFinderMapping extends DTO<BrandProperties, BrandFinderDTO> {
   execute(data: BrandProperties): BrandFinderDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
