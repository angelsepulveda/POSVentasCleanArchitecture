import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import CategoryFinder from '../../../application/usesCases/categoryFinder';

@injectable()
export default class CategoryFinderController {
   constructor(@inject(CategoryFinder) private readonly finder: CategoryFinder){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      try{
         const { id } = req.params;

         const result = await this.finder.run(id);

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
