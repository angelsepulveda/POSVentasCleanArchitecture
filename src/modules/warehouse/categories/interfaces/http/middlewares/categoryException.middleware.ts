import { NextFunction, Request, Response} from 'express';

import { DomainException } from '../../../../../shared/domain/exceptions/domain.exception';

class CategoryExceptionMiddleware {
   static async DomainExceptionHandler(error: any, req: Request, res: Response, next: NextFunction) {
      if (error instanceof DomainException) {
        let statusCode = 500;

        if (error.name === 'CATEGORY_NAME_REQUIRED') {
          statusCode = 400; // Bad Request
        } else if (error.name === 'CATEGORY_NAME_LENGTH_INVALID' || error.name === 'CATEGORY_DESCRIPTION_LENGTH_INVALID') {
          statusCode = 422; // Unprocessable Entity
        } else if (error.name === 'CATEGORY_NOT_FOUND') {
          statusCode = 404; // Not Found
        }

        res.status(statusCode).json({ type: error.name, error: error.message });
      } else {
        next(error);
      }
    }
}

export const CategoryMiddlewareError: ((error: any,req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
   CategoryExceptionMiddleware.DomainExceptionHandler
];
