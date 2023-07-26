import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import CategoryUpdater from '../../../application/usesCases/categoryUpdater';

@injectable()
export default class CategoryUpdaterController {
   constructor(@inject(CategoryUpdater) private readonly updater: CategoryUpdater){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      const { guid } = req.params;
      try{
         const { name, description } = req.body;

         const result = await this.updater.run({
            id: guid,
            name,
            description
         });

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
