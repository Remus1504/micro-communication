import { databaseConnection } from '../src/database';
import { config } from '../src/configuration';
import express, { Express } from 'express';
import { start } from '../src/server';

const initilize = (): void => {
  config.cloudinaryConfig();
  databaseConnection();
  const app: Express = express();
  start(app);
};

initilize();
