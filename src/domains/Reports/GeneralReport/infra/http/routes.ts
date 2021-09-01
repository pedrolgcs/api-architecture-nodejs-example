import { Router } from 'express';

const generalReportRoutes = Router();

// controllers
import { AnalyticController } from '../../useCases/analytic/AnalyticController';

// inicialize
const analyticController = new AnalyticController();

generalReportRoutes.get('/general/synthetic', (request, response) => {
  return response.send('synthetic');
});

generalReportRoutes.get('/general/analytic', analyticController.handle);

export { generalReportRoutes };
