import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class BrandCreatorValidator {
   @IsString({ message: 'Name must be a string' })
   @IsNotEmpty({ message: 'Name must not be empty' })
   @MaxLength(50, { message: 'Name must not exceed 50 characters' })
   name: string;

   @MaxLength(1024, { message: 'Description must not exceed 1024 characters' })
   description: string;
}
