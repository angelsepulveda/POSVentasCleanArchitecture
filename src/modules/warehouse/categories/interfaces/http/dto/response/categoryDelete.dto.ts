import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';


interface CategoryDTO {
   name: string
   description: string
   id: string
}

export type CategoryDeleteDTO = CategoryDTO

export class CategoryDeleteMapping extends DTO<CategoryProperties, CategoryDeleteDTO> {
   execute(data: CategoryProperties): CategoryDeleteDTO {
      return {
         name: data.name,
         description: data.description,
         id: data.id.value,
      };
   }
}
