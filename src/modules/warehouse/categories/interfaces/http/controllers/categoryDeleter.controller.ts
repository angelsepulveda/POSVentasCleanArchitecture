import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import CategoryDeleter from '../../../application/usesCases/categoryDeleter';

@injectable()
export default class CategoryDeleterController {
   constructor(@inject(CategoryDeleter) private readonly deleter: CategoryDeleter){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      try{
         const { id } = req.params;

         const result = await this.deleter.run(id);

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
