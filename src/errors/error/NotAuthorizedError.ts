import { ApiError } from '@errors/ApiError';
import httpStatus from 'http-status-codes';

export class NotAuthorizedError extends ApiError {
  status = httpStatus.UNAUTHORIZED;

  constructor(
    message = httpStatus.getStatusText(httpStatus.UNAUTHORIZED),
  ) {
    super(message);
  }
}
