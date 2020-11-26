import { Logger } from 'tslog';

const logger: Logger = new Logger({
  maskValuesOfKeys: [
    'authorization',
    'password',
    'ACCESS_TOKEN_SECRET',
    'REFRESH_TOKEN_SECRET',
  ],
  maskAnyRegEx: ['pass.*'],
});

export { logger };
