import 'tsconfig-paths/register';
import { app } from '@app';
import { logger } from '@config/logger';
import { PORT } from '@config/secrets.env';

app.listen(PORT, () => logger.info(`Server ready on port ${PORT}`));
