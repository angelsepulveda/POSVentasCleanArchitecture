import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class BrandUpdaterValidator {
   @IsString({ message: 'Name must be a string' })
   @IsNotEmpty({ message: 'Name must not be empty' })
   @MaxLength(50, { message: 'Name must not exceed 50 characters' })
   name: string;

   @MaxLength(1024, { message: 'Description must not exceed 1024 characters' })
   description: string;

   @IsString({ message: 'Id must be a string' })
   @IsNotEmpty({ message: 'Id must not be empty' })
   @MinLength(10, { message: 'Id is too short' })
   id: string;
}
