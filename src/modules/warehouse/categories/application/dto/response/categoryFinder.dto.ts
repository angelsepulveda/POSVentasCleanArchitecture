import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';
import { CategoryDTO } from './category.dto';


export type CategoryFinderDTO = CategoryDTO

export class CategoryFinderMapping extends DTO<CategoryProperties, CategoryFinderDTO> {
   execute(data: CategoryProperties): CategoryFinderDTO {
      return {
         name: data.name.value,
         description: data.description.value,
         id: data.id.value,
      };
   }
}
