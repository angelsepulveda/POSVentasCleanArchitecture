import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string
   id: string
}

export type CategoryInsertDTO = CategoryDTO

export class CategoryInsertMapping extends DTO<CategoryProperties, CategoryInsertDTO> {
   execute(data: CategoryProperties): CategoryInsertDTO {
      return {
         name: data.name,
         description: data.description,
         id: data.id.value,
      };
   }
}
