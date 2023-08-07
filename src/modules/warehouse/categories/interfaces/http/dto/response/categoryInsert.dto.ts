import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';
import { Optional } from '../:./../../../../../..//shared/domain/types/optional.type';

interface CategoryDTO {
   name: string
   description: Optional<string>
   id: string
}

export type CategoryInsertDTO = CategoryDTO

export class CategoryInsertMapping extends DTO<CategoryProperties, CategoryInsertDTO> {
   execute(data: CategoryProperties): CategoryInsertDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
