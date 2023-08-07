import { validate } from 'class-validator';
import { NextFunction,Request, Response } from 'express';

import getErrorMessages, { ErrorMessages } from '../../../../.:/../../../helpers/validationMessage';
import { CategoryCreatorValidator } from '../validators/categoryCreator.validator';
import { CategoryListOneValidator } from '../validators/categoryListOne.validator';
import { CategoryUpdaterValidator } from '../validators/categoryUpdater.validator';


class CategoryMiddleware {
   static async ValidateListOne(req: Request,res: Response, next: NextFunction) {
      const { id } = req.params;
      const categoryListOneValidator = new CategoryListOneValidator();
      categoryListOneValidator.id = id;

      const errors = await validate(categoryListOneValidator);

      if (errors.length > 0) {
         const errorMessages: ErrorMessages = getErrorMessages(errors);
         res.status(400).json({ errorMessages });
         return next(new Error('Invalid request'));
      }

      next();
   }

   static async ValidateCreator(req: Request, res: Response, next: NextFunction) {
      const { name, description } = req.body;
      const categoryCreatorValidator = new CategoryCreatorValidator();
      categoryCreatorValidator.name = name;
      categoryCreatorValidator.description = description;

      const errors = await validate(categoryCreatorValidator);

      if (errors.length > 0) {
         const errorMessages: ErrorMessages = getErrorMessages(errors);
         res.status(400).json({ errorMessages });
         return next(new Error('Invalid request'));
      }

      next();

   }

   static async ValidateUpdater(req: Request, res: Response, next: NextFunction) {
      const { id } = req.params;
      const { name, description } = req.body;
      const categoryUpdaterValidator = new CategoryUpdaterValidator();

      categoryUpdaterValidator.id = id;
      categoryUpdaterValidator.name = name;
      categoryUpdaterValidator.description = description;

      const errors = await validate(categoryUpdaterValidator);

      if (errors.length > 0) {
         console.log(errors);
         res.status(400).json({ error: 'Invalid request' });
         return next(new Error('Invalid request'));
      }

      next();

   }
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   CategoryMiddleware.ValidateListOne,
];

export const MiddlewareCreator: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   CategoryMiddleware.ValidateCreator,
];

export const MiddlewareUpdater: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   CategoryMiddleware.ValidateUpdater,
];
