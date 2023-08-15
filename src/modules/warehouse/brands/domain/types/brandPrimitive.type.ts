import { Optional } from '../../../../shared/domain/types/optional.type';

export type BrandPrimitive = {
   id: string
   name: string
   description: Optional<string>
   active: boolean
}
