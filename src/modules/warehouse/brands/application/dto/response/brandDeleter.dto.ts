import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { BrandProperties } from '../../../domain/types/brandProperties.type';
import { BrandDTO } from './brand.dto';

export type BrandDeleterDTO = BrandDTO

export class BrandDeleterMapping extends DTO<BrandProperties, BrandDeleterDTO> {
   execute(data: BrandProperties): BrandDeleterDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
