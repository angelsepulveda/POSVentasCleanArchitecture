import { Optional } from '../../../../../shared/domain/types/optional.type';

export interface BrandDTO {
   name: string
   description: Optional<string>
   id: string
}
