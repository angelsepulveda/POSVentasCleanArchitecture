import { Optional } from 'src/modules/shared/domain/types/optional.type';

import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: Optional<string>
   id: string
}

export type CategoryListDTO = CategoryDTO[]

export class CategoryListMapping extends DTO<CategoryProperties[], CategoryListDTO> {
   execute(data: CategoryProperties[]): CategoryListDTO {
      return data.map((category: CategoryProperties) => {
         return {
            name: category.name.value,
            description: category.description.value,
            id: category.id.value,
         };
      });
   }
}
