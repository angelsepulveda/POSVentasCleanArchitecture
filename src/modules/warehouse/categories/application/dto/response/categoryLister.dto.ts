import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';
import { CategoryDTO } from './category.dto';

export type CategoryListerDTO = CategoryDTO[]

export class CategoryListerMapping extends DTO<CategoryProperties[], CategoryListerDTO> {
   execute(data: CategoryProperties[]): CategoryListerDTO {
      return data.map((category: CategoryProperties) => {
         return {
            name: category.name.value,
            description: category.description.value,
            id: category.id.value,
         };
      });
   }
}
