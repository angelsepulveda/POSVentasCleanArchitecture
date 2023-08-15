import Brand from './brand';
import { BrandUpdate } from './types/brandUpdate.type';
import { BrandId } from './valueObjects/brandId.vo';

export interface BrandRepository {
   list(): Promise<Brand[]>
   listOne(id: BrandId): Promise<Brand>
   insert(category: Brand): Promise<Brand>
   update(id: BrandId, category: Partial<BrandUpdate>): Promise<Brand>
   delete(id: BrandId): Promise<Brand>
}
