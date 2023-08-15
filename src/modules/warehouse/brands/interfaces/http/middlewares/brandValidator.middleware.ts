import { validate } from 'class-validator';
import { NextFunction,Request, Response } from 'express';

import getErrorMessages, { ErrorMessages } from '../../../../../../helpers/validationMessage';
import { BrandCreatorValidator } from '../validators/brandCreator.validator';
import { BrandFinderValidator } from '../validators/brandFinder.validator';
import { BrandUpdaterValidator } from '../validators/brandUpdater.validator';



class BrandMiddleware {
   static async ValidateFinder(req: Request,res: Response, next: NextFunction) {
      const { id } = req.params;
      const brandListOneValidator = new BrandFinderValidator();
      brandListOneValidator.id = id;

      const errors = await validate(brandListOneValidator);

      if (errors.length > 0) {
         const errorMessages: ErrorMessages = getErrorMessages(errors);
         res.status(400).json({ errorMessages });
         return next(new Error('Invalid request'));
      }

      next();
   }

   static async ValidateCreator(req: Request, res: Response, next: NextFunction) {
      const { name, description } = req.body;
      const brandCreatorValidator = new BrandCreatorValidator();
      brandCreatorValidator.name = name;
      brandCreatorValidator.description = description;

      const errors = await validate(brandCreatorValidator);

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
      const brandUpdaterValidator = new BrandUpdaterValidator();

      brandUpdaterValidator.id = id;
      brandUpdaterValidator.name = name;
      brandUpdaterValidator.description = description;

      const errors = await validate(brandUpdaterValidator);

      if (errors.length > 0) {
         console.log(errors);
         res.status(400).json({ error: 'Invalid request' });
         return next(new Error('Invalid request'));
      }

      next();

   }
}

export const MiddlewareFinder: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   BrandMiddleware.ValidateFinder,
];

export const MiddlewareCreator: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   BrandMiddleware.ValidateCreator,
];

export const MiddlewareUpdater: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   BrandMiddleware.ValidateUpdater,
];
