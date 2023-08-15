import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import BrandCreator from '../../../application/useCases/brandCreator';

@injectable()
export default class BrandCreatorController {
   constructor(@inject(BrandCreator) private readonly creator: BrandCreator){}

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
