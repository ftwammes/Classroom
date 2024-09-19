import express from "express";
import { router } from "./router";
import cors from "cors";
export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.server.use(cors());
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
}