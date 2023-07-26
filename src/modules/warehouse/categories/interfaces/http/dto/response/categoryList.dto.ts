import { DTO } from '../../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string
   id: string
}

export type CategoryListDTO = CategoryDTO[]

export class CategoryListMapping extends DTO<CategoryProperties[], CategoryListDTO> {
   execute(data: CategoryProperties[]): CategoryListDTO {
      return data.map((category: CategoryProperties) => {
         return {
            name: category.name,
            description: category.description,
            id: category.id.value,
         };
      });
   }
}
