export const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const CORS_DOMAIN = process.env.CORS_DOMAIN;
export const DB_URI = process.env.DB_URI;
export const ACCESS_TOKEN_EXP_DAYS = process.env.ACCESS_TOKEN_EXP_DAYS;
export const REFRESH_TOKEN_EXP_DAYS =
  process.env.REFRESH_TOKEN_EXP_DAYS;
export const TOKEN_ISSUER = process.env.TOKEN_ISSUER;
export const TOKEN_AUDIENCE = process.env.TOKEN_AUDIENCE;
export const ROUTE_PREFIX = process.env.ROUTE_PREFIX || 'v1';
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!CORS_DOMAIN) {
  console.log('[CORS_DOMAIN] not has defined');

  process.exit(1);
}

if (!DB_URI) {
  console.log('[DB_URI] not has defined');

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

if (!ACCESS_TOKEN_SECRET) {
  console.log('[ACCESS_TOKEN_SECRET] not has defined');

  process.exit(1);
}
