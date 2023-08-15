import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
   @PrimaryColumn()
   guid: string;

   @Column({ type: 'varchar', length: 50 })
   name: string;

   @Column({ type: 'varchar', length: 256, nullable: true })
   description: string | null | undefined;

   @Column({ type: 'boolean', default: true })
   active: boolean;
}
