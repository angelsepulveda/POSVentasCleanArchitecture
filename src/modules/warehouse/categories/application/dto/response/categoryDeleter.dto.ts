import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string | null | undefined
   id: string
}

export type CategoryDeleterDTO = CategoryDTO

export class CategoryDeleterMapping extends DTO<CategoryProperties, CategoryDeleterDTO> {
   execute(data: CategoryProperties): CategoryDeleterDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
