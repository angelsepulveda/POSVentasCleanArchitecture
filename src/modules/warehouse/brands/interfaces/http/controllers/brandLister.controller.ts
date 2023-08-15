import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import BrandLister from '../../../application/useCases/brandLister';

@injectable()
export default class BrandListerController {
   constructor(@inject(BrandLister) private readonly lister: BrandLister){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      try{

         const result = await this.lister.run();

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
