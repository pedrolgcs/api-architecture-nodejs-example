// Reports
import * as Empty from './Reports/EmptyResponses';

// types
import { ResponseTypes } from './Reports/Types/ResponseTypes';

export = {
  [ResponseTypes.GENERAL]: Empty.GeneralReport,
  [ResponseTypes.POINTS_RANKING]: Empty.PointsRanking,
};
