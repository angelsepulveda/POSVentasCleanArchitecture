import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string | null | undefined
   id: string
}

export type CategoryCreatorDTO = CategoryDTO

export class CategoryCreatorMapping extends DTO<CategoryProperties, CategoryCreatorDTO> {
   execute(data: CategoryProperties): CategoryCreatorDTO {
      return {
         name: data.name.getValue(),
         description: data.description.getValue(),
         id: data.id.getValue(),
      };
   }
}
