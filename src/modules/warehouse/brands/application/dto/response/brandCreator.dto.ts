import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { BrandProperties } from '../../../domain/types/brandProperties.type';
import { BrandDTO } from './brand.dto';

export type BrandCreatorDTO = BrandDTO

export class BrandCreatorMapping extends DTO<BrandProperties, BrandCreatorDTO> {
   execute(data: BrandProperties): BrandCreatorDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
