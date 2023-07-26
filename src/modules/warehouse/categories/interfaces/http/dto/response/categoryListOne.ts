import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string
   id: string
}

export type CategoryListOneDTO = CategoryDTO

export class CategoryListOneMapping extends DTO<CategoryProperties, CategoryListOneDTO> {
   execute(data: CategoryProperties): CategoryListOneDTO {
      return {
         name: data.name,
         description: data.description,
         id: data.id.value,
      };
   }
}
