import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string
   id: string
}

export type CategoryUpdateDTO = CategoryDTO

export class CategoryUpdateMapping extends DTO<CategoryProperties, CategoryUpdateDTO> {
   execute(data: CategoryProperties): CategoryUpdateDTO {
      return {
         name: data.name,
         description: data.description,
         id: data.id.value,
      };
   }
}
