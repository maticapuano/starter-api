import mongoose from 'mongoose';
import { logger } from './logger';
import { DB_URI } from './secrets.env';

export const initDatabase = async (): Promise<boolean | null> => {
  try {
    await mongoose.connect(DB_URI as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: true,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    logger.info('Database connected successfully.');

    return true;
  } catch (error) {
    logger.fatal(`An ocurred a error to connect database: ${error}`);

    return null;
  }
};
