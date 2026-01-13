import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from '../interfaces/api-response.interface';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'Internal Server Error' };

    const body: ApiResponse<null> = {
      success: false,
      statusCode: status,
      // Extract specific message if available, otherwise use default
      message: (errorResponse as any).message || 'An error occurred',
      error: (errorResponse as any).error || exception,
    };

    response.status(status).json(body);
  }
}
