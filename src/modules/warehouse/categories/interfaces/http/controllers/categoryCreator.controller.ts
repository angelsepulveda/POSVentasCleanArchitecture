import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import CategoryCreator from '../../../application/usesCases/categoryCreator';

@injectable()
export default class CategoryCreatorController {
   constructor(@inject(CategoryCreator) private readonly creator: CategoryCreator){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      try{
         const { name, description } = req.body;

         const result = await this.creator.run({
            name,
            description
         });

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
