import { NextFunction, Request,Response } from 'express';
import { inject, injectable } from 'inversify';

import BrandUpdater from '../../../application/useCases/brandUpdater';


@injectable()
export default class BrandUpdaterController {
   constructor(@inject(BrandUpdater) private readonly updater: BrandUpdater){}

   async run(req: Request, res: Response, next: NextFunction): Promise<void>{
      const { id } = req.params;
      try{
         const { name, description } = req.body;

         const result = await this.updater.run({
            id,
            name,
            description
         });

         res.json(result);

      }catch(e){
         next(e);
      }
   }
}
