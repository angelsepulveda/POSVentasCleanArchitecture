import { validate } from 'class-validator';
import { NextFunction,Request, Response } from 'express';

import { CategoryListOneValidator } from '../validators/categoryListOne.validator';

class CategoryMiddleware {
   static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
      const { id } = req.params;
      const categoryListOneValidator = new CategoryListOneValidator();
      categoryListOneValidator.id = id;

      const errors = await validate(categoryListOneValidator);

      if (errors.length > 0) {
         console.log(errors);
         return next(new Error('Invalid request'));
         // return res.status(400).json({ error: 'Invalid request' })
      }

      next();
   }
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   CategoryMiddleware.ValidateListOne,
];
