import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import CategoryLister from '../../../application/usesCases/categoryLister';


@injectable()
export default class CategoryListerController {
   constructor(@inject(CategoryLister) private readonly lister: CategoryLister){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      try{

         const result = await this.lister.run();

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
