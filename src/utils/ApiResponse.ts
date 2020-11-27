import { Response } from 'express';
import httpStatus from 'http-status-codes';

export class ApiResponse {
  static success(
    res: Response,
    data: unknown,
    status = 200,
    message?: string,
  ): Response {
    return res.status(status).json({
      success: true,
      message: message ? message : httpStatus.getStatusText(status),
      data,
    });
  }
}
