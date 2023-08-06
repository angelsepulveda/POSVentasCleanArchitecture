import { Optional } from '../../../../shared/domain/types/optional.type';

export type CategoryPrimitive = {
   id: string
   name: string
   description: Optional<string>
   active: boolean
}
