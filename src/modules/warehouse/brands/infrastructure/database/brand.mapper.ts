import Brand from '../../domain/brand';
import { BrandActive } from '../../domain/valueObjects/brandActive.vo';
import { BrandDescription } from '../../domain/valueObjects/brandDescription.vo';
import { BrandId } from '../../domain/valueObjects/brandId.vo';
import { BrandName } from '../../domain/valueObjects/brandName.vo';
import { BrandEntity } from './brand.entity';

export default class BrandMapper{
   static toDomain(brandEntity: BrandEntity): Brand {
      return new Brand({
        id: new BrandId(brandEntity.guid),
        name: new BrandName(brandEntity.name),
        description: new BrandDescription(brandEntity.description),
        active: new BrandActive(brandEntity.active),
      });
    }

    static toEntity(brand: Brand): BrandEntity {
      const brandInsert = new BrandEntity();

      const { id, name, description, active } = brand.toPrimitives();

      Object.assign(brandInsert, {
        guid: id,
        name,
        description,
        active,
      });

      return brandInsert;
    }
}
