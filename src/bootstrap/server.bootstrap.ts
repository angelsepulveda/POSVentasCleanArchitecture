import { Application } from 'express';
import http from 'http';

import { Bootstrap } from './base.bootstrap';
import { AppService } from './services/app.service';

export default class extends Bootstrap{
  constructor(private readonly app: Application){
      super();
  }

   initialize (): Promise<string | Error> {
      return new Promise<string | Error>((resolve,reject) => {
         const server = http.createServer(this.app);

         server.listen(AppService.PORT)
         .on('listening',() => {
            resolve('Promise resolve successfully');
            console.log(`Server listening on port: http://localhost:${AppService.PORT}`);
         })
         .on('error',error => {
            reject(error);
            console.log('error on port 3000');
         });
      });
   }
}
