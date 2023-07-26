import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string | null | undefined
   id: string
}

export type CategoryFinderDTO = CategoryDTO

export class CategoryFinderMapping extends DTO<CategoryProperties, CategoryFinderDTO> {
   execute(data: CategoryProperties): CategoryFinderDTO {
      return {
         name: data.name.getValue(),
         description: data.description.getValue(),
         id: data.id.getValue(),
      };
   }
}
