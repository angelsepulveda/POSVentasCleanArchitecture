import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import BrandDeleter from '../../../application/useCases/brandDeleter';

@injectable()
export default class BrandDeleterController {
   constructor(@inject(BrandDeleter) private readonly deleter: BrandDeleter){}

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
