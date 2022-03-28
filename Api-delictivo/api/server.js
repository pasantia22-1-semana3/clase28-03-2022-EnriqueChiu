import express from 'express';

import routeCrime from './crime/routes/crime.route.js';


import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

// Object swagger
const swaggerSpec ={
  definition:{
    openapi: "3.0.0",     //version
    info: {               //info api
      title: "api-crime",
      version: "1.0.0"
    },
    server:[              //info server
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis:[`api/crime/routes/*.js`]
}

/**
 * Clase para el servidor
 * @constructor {*} hostname de api 
 * @constructor {*} port de api 
 * @constructor {*} name de api 
 */
export class Server{
  constructor(hostname, port, nameApi){
    this._hostname = hostname,
    this._port = port,
    this._nameApi = nameApi
    this._api = express()
    this.initMiddlawares()
    this.initRouter()
  }

  /**
   * Metodo donde se declara las Middlawares que se necesita.
   */
  initMiddlawares(){
    this._api.use(express.json());
    this._api.use(express.urlencoded({extended: true}));
  }

  /**
   * Metodo donde se define las rutas de la api.
   */
  initRouter(){
    this._api.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    this._api.use('/api/v1/crime', routeCrime)
    this._api.use('/api/v1/home', (req, res)=>{
        res.json({message: "Welcome to Api-Crime"});
    });
  }

  /**
   * Metodo para levantar el servidor.
   */
  initServer(){
    try {
      this._api.set('trust proxy', this._hostname);
      this._api.listen(this._port, ()=>{
        console.log(`Server ${this._nameApi} running at http://${this._hostname}:${this._port}`);
      })  
    } catch (error) {
      console.log(`Error start Server, info error: ${error}`);
    }
  }

}