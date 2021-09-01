import { Request, Response } from 'express';

// useCase
import { AnalyticUseCase } from './AnalyticUseCase';

type TRequestQuery = {
  date_start: string;
  date_end: string;
  place_id: string;
};

class AnalyticController {
  constructor() {}

  public async handle(request: Request, response: Response): Promise<void> {
    const { date_start, date_end, place_id } = request.query as TRequestQuery;

    const analyticUseCase = new AnalyticUseCase({
      date_end,
      date_start,
      place_id,
    });

    const analyticResponse = await analyticUseCase.execute();

    // set headers

    response.status(201).send(analyticResponse);
  }
}

export { AnalyticController };
