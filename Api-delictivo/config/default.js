import dotenv from 'dotenv';

const env = dotenv.config();

/**
 * Variables de entorno
 */
export const config ={
  api:{
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5000,
    app: process.env.APP || 'name-default'
  }
}