import { winstonLogger } from '@remus1504/micrograde-shared';
import { Logger } from 'winston';
import { config } from '../src/configuration';
import mongoose from 'mongoose';

const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_ENDPOINT}`,
  'chatDatabaseServer',
  'debug',
);

const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.MONGO_DB_CONNCECTION_URL}`);
    log.info('Chat service successfully connected to database.');
  } catch (error) {
    log.log(
      'error',
      'Communication Service databaseConnection() method error:',
      error,
    );
  }
};

export { databaseConnection };
