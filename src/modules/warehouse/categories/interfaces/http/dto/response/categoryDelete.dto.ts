import { Optional } from '../../../../../../shared/domain/types/optional.type';
import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';


interface CategoryDTO {
   name: string
   description:  Optional<string>
   id: string
}

export type CategoryDeleteDTO = CategoryDTO

export class CategoryDeleteMapping extends DTO<CategoryProperties, CategoryDeleteDTO> {
   execute(data: CategoryProperties): CategoryDeleteDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
