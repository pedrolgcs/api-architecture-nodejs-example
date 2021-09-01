import 'dotenv/config';
import 'express-async-errors';

import express, { json, Request, Response, NextFunction } from 'express';

import { routes } from './routes';

// erros
import { AppError } from '../../Errors/AppError';
import ErrorResponses from '../../Errors/MappingErrors';

const app = express();

// middlewares
app.use(json());

// routes
app.use(routes);

// error global
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError && err.name) {
    return response.status(err.statusCode).json(
      ErrorResponses[err.name as keyof typeof ErrorResponses]
    );
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server Error - ${err.message}`,
  });
});

export { app };
