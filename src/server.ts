import 'tsconfig-paths/register';
import { app } from '@app';
import { logger } from '@config/logger';
import { PORT } from '@config/secrets.env';
import { initDatabase } from '@config/database';

const start = async () => {
  try {
    const database = await initDatabase();

    if (database) {
      app.listen(PORT, () =>
        logger.info(`Server ready on port ${PORT}`),
      );
    }
  } catch (error) {
    logger.fatal(`An exception ocurred ${error}`);
    process.exit(1);
  }
};

start();
