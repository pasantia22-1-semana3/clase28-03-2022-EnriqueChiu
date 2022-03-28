import { Server } from "./server.js";
import { config } from "../config/default.js";

/**
 * Funcion main para inicial el server
 * @param {*} hostname el hostname de server
 * @param {*} port el puerto de server
 * @param {*} nameApi el nombre de la api
 */
function main(hostname, port, nameApi){
  const server = new Server(hostname, port, nameApi);
  server.initServer();
}



main(config.api.host, config.api.port, config.api.app);