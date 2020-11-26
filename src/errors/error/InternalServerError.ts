import { ApiError } from '@errors/ApiError';
import httpStatus from 'http-status-codes';

export class InternalServerError extends ApiError {
  status = httpStatus.INTERNAL_SERVER_ERROR;

  constructor(
    message = httpStatus.getStatusText(
      httpStatus.INTERNAL_SERVER_ERROR,
    ),
  ) {
    super(message);
  }
}
