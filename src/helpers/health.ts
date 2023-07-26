import { Request, Response,Router } from 'express';

class RouterHealth {
   readonly expressRouter: Router;

   constructor(){
      this.expressRouter = Router();
      this.mounthRoutes();
   }

   mounthRoutes(): void {
      this.expressRouter.get('/',(req: Request, res: Response) => {
         res.send('all is ok');
      });
   }
}

export default new RouterHealth().expressRouter;
