import { Router } from 'express';

// reports
import { reportsRoutes } from './reports.routes';

const routes = Router();

routes.use('/reports', reportsRoutes);

routes.get('/', (reques, response) => {
  response.send('Hello World');
});

export { routes };
