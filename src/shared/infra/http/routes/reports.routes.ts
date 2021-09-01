import { Router } from 'express';

// routes
import { generalReportRoutes } from '../../../../domains/Reports/GeneralReport/infra/http/routes';

const reportsRoutes = Router();

reportsRoutes.use(generalReportRoutes);

export { reportsRoutes };
