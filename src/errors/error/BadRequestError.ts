import { ApiError } from '@errors/ApiError';
import httpStatus from 'http-status-codes';

export class BadRequestError extends ApiError {
  status = httpStatus.BAD_REQUEST;

  constructor(
    message = httpStatus.getStatusText(httpStatus.BAD_REQUEST),
  ) {
    super(message);
  }
}
