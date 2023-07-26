import { DTO } from '../../../../../shared/interfaces/dto.interface';
import { CategoryProperties } from '../../../domain/types/categoryProperties.type';

interface CategoryDTO {
   name: string
   description: string | null | undefined
   id: string
}

export type CategoryListerDTO = CategoryDTO[]

export class CategoryListerMapping extends DTO<CategoryProperties[], CategoryListerDTO> {
   execute(data: CategoryProperties[]): CategoryListerDTO {
      return data.map((category: CategoryProperties) => {
         return {
            name: category.name.getValue(),
            description: category.description.getValue(),
            id: category.id.getValue(),
         };
      });
   }
}
