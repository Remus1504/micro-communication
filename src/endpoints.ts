import { verifyGatewayRequest } from '@remus1504/micrograde-shared';
import { Application } from 'express';
import { healthRoutes } from './Endpoints/health';
import { messageRoutes } from '../src/Endpoints/message';

const BASE_PATH = '/api/v1/message';

const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, messageRoutes());
};

export { appRoutes };
