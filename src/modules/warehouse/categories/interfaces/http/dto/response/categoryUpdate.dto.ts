import { Optional } from '../../../../../../shared/domain/types/optional.type';
import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description:  Optional<string>
   id: string
}

export type CategoryUpdateDTO = CategoryDTO

export class CategoryUpdateMapping extends DTO<CategoryProperties, CategoryUpdateDTO> {
   execute(data: CategoryProperties): CategoryUpdateDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
