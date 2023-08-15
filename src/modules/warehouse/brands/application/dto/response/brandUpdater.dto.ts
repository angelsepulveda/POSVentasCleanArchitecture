import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { BrandProperties } from '../../../domain/types/brandProperties.type';
import { BrandDTO } from './brand.dto';

export type BrandUpdaterDTO = BrandDTO

export class BrandUpdaterMapping extends DTO<BrandProperties, BrandUpdaterDTO> {
   execute(data: BrandProperties): BrandUpdaterDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
