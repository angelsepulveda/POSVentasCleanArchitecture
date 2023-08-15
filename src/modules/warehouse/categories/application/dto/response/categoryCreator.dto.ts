import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';
import { CategoryDTO } from './category.dto';

export type CategoryCreatorDTO = CategoryDTO

export class CategoryCreatorMapping extends DTO<CategoryProperties, CategoryCreatorDTO> {
   execute(data: CategoryProperties): CategoryCreatorDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
