import { injectable } from 'inversify';

import DatabaseBootstrap from '../../../../../bootstrap/database.bootstrap';
import Brand from '../../domain/brand';
import { BrandRepository } from '../../domain/brandRepository';
import { BrandNotFoundException } from '../../domain/exceptions/brand.exception';
import { BrandUpdate } from '../../domain/types/brandUpdate.type';
import { BrandId } from '../../domain/valueObjects/brandId.vo';
import { BrandEntity } from './brand.entity';
import BrandMapper from './brand.mapper';

@injectable()
export default class BrandTypeORMRepository implements BrandRepository {
   async list (): Promise<Brand[]> {
      const repo = DatabaseBootstrap.dataSource.getRepository(BrandEntity);
      const result = await repo.find({ where: { active: true } });
      return result.map((el) => BrandMapper.toDomain(el));
   }

   async listOne (id: BrandId): Promise<Brand> {
      const repo = DatabaseBootstrap.dataSource.getRepository(BrandEntity);
      const result = await repo.findOne({ where: { guid: id.value } });
      if (!result) {
         throw new BrandNotFoundException();
      }

      return BrandMapper.toDomain(result);
   }

   async insert (brand: Brand): Promise<Brand> {
      const repo = DatabaseBootstrap.dataSource.getRepository(BrandEntity);

      const brandInsert = BrandMapper.toEntity(brand);

      await repo.save(brandInsert);

      return brand;
   }

   async update (id: BrandId, brand: Partial<BrandUpdate>): Promise<Brand> {
      const repo = DatabaseBootstrap.dataSource.getRepository(BrandEntity);
      const brandFound = await repo.findOne({ where: { guid: id.value } });

      if (!brandFound) {
         throw new BrandNotFoundException();
      }

      Object.assign(brandFound, brand);

      const brandEntity = await repo.save(brandFound);

      return BrandMapper.toDomain(brandEntity);

   }

   async delete (id: BrandId): Promise<Brand> {
      const repo = DatabaseBootstrap.dataSource.getRepository(BrandEntity);
      const brandFound = await repo.findOne({
         where: { guid: id.value },
      });

      if (!brandFound) {
         throw new BrandNotFoundException();
      }

      brandFound.active = false;

      const brandEntity = await repo.save(brandFound);

      return BrandMapper.toDomain(brandEntity);
   }
}
