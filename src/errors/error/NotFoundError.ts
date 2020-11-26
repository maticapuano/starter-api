import { ApiError } from '@errors/ApiError';
import httpStatus from 'http-status-codes';

export class NotFoundError extends ApiError {
  status = httpStatus.NOT_FOUND;

  constructor(
    public message = httpStatus.getStatusText(httpStatus.NOT_FOUND),
  ) {
    super(message);
  }
}
