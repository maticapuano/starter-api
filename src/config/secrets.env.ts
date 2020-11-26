export const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT;
export const CORS_DOMAIN = process.env.CORS_DOMAIN;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PORT = process.env.DB_PORT;
export const ACCESS_TOKEN_EXP_DAYS = process.env.ACCESS_TOKEN_EXP_DAYS;
export const REFRESH_TOKEN_EXP_DAYS =
  process.env.REFRESH_TOKEN_EXP_DAYS;
export const TOKEN_ISSUER = process.env.TOKEN_ISSUER;
export const TOKEN_AUDIENCE = process.env.TOKEN_AUDIENCE;

if (!PORT) {
  console.log('[PORT] not has defined.');

  process.exit(1);
}

if (!CORS_DOMAIN) {
  console.log('[CORS_DOMAIN] not has defined');

  process.exit(1);
}

if (!DB_HOST) {
  console.log('[DB_HOST] not has defined');

  process.exit(1);
}

if (!DB_USER) {
  console.log('[DB_USER] not has defined');

  process.exit(1);
}

if (!ACCESS_TOKEN_EXP_DAYS) {
  console.log('[ACCESS_TOKEN_EXP_DAYS] not has defined');

  process.exit(1);
}
if (!REFRESH_TOKEN_EXP_DAYS) {
  console.log('[REFRESH_TOKEN_EXP_DAYS] not has defined');

  process.exit(1);
}
if (!TOKEN_ISSUER) {
  console.log('[TOKEN_ISSUER] not has defined');

  process.exit(1);
}
if (!TOKEN_AUDIENCE) {
  console.log('[TOKEN_AUDIENCE] not has defined');

  process.exit(1);
}
