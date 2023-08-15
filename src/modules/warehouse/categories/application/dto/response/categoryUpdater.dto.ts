import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';
import { CategoryDTO } from './category.dto';

export type CategoryUpdaterDTO = CategoryDTO

export class CategoryUpdaterMapping extends DTO<CategoryProperties, CategoryUpdaterDTO> {
   execute(data: CategoryProperties): CategoryUpdaterDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
