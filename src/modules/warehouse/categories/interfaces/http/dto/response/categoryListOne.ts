import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';
import { Optional } from '../:./../../../../../..//shared/domain/types/optional.type';

interface CategoryDTO {
   name: string
   description: Optional<string>
   id: string
}

export type CategoryListOneDTO = CategoryDTO

export class CategoryListOneMapping extends DTO<CategoryProperties, CategoryListOneDTO> {
   execute(data: CategoryProperties): CategoryListOneDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
