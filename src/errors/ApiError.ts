import { Response } from 'express';
import httpStatus from 'http-status-codes';

export interface IErrorValidationDetail {
  message: string;
  location?: string;
  param?: string;
  value?: string;
}

export abstract class ApiError extends Error {
  public status = httpStatus.INTERNAL_SERVER_ERROR;
  public success = false;

  constructor(
    public message: string,
    public errors?: IErrorValidationDetail[],
  ) {
    super(message);
  }

  public static handler(err: ApiError, res: Response): Response {
    const success = err.success || false;
    const status = err.status || httpStatus.getStatusText(err.status);
    const message = err.message || httpStatus.getStatusText(err.status);
    const errors = err.errors ? err.errors : { message };

    return res.status(err.status).json({
      success,
      status,
      errors,
    });
  }
}
