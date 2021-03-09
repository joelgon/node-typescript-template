import { Application } from 'express';
import * as express from 'express';
import * as Cors from 'cors';
import { json, urlencoded } from 'body-parser';

export class Server {
  private express: Application;
  private port: number;

  constructor() {
    this.express = express();
    this.port = 3003;
    this.express.use(json());
    this.express.use(urlencoded({ extended: false }));
    this.express.use(Cors());
  }

  listen = (): void => {
    this.express.listen(this.port);
    console.log(`server listening on port: ${this.port}`);
  };
}
