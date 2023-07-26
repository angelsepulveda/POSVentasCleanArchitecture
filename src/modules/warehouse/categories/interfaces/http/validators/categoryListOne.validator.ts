import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CategoryListOneValidator {
   @IsString({ message: 'Id must be a string' })
   @IsNotEmpty({ message: 'Id must not be empty' })
   @MinLength(10, { message: 'Id is too short' })
   id: string;
}
