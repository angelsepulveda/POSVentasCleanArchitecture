import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import BrandFinder from '../../../application/useCases/brandFinder';


@injectable()
export default class BrandFinderController {
   constructor(@inject(BrandFinder) private readonly finder: BrandFinder){}

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
