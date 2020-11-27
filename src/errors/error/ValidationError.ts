import { ApiError, IErrorValidationDetail } from '@errors/ApiError';
import httpStatus from 'http-status-codes';

export class ValidationError extends ApiError {
  status = httpStatus.BAD_REQUEST;

  constructor(
    message = httpStatus.getStatusText(httpStatus.BAD_REQUEST),
    errors: IErrorValidationDetail[],
  ) {
    super(message, errors);
  }
}
