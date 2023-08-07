import { ValidationError } from 'class-validator';

export interface ErrorMessages {
   [property: string]: string;
 }


 export default function getErrorMessages(errors: ValidationError[]): ErrorMessages {
   const errorMessages: ErrorMessages = {};

   errors.forEach((error: ValidationError) => {
     const { property, constraints } = error;
     errorMessages[property] = Object.values(constraints)[0];
   });

   return errorMessages;
}
