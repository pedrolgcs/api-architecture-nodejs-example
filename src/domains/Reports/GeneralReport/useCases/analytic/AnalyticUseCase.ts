// erros
import { AppError } from '../../../../../shared/Errors/AppError';
import { ResponseTypes } from '../../../../../shared/Errors/Reports/Types/ResponseTypes';

// formatters
import { SheetFormatter } from '../../Formatters/SheetFormatter';

type TDataRequest = {
  date_start: string;
  date_end: string;
  place_id: string;
};

class AnalyticUseCase {
  private date_start: string;
  private date_end: string;
  private place_id: string;

  constructor({ date_start, date_end, place_id }: TDataRequest) {
    this.date_end = date_end;
    this.date_start = date_start;
    this.place_id = place_id;
  }

  private async getCube() {
    throw new AppError('Deu ruim', 400, ResponseTypes.GENERAL);
  }

  private async gteCube2() {}

  public async execute(): Promise<string> {
    console.log('pegou os dados do cube');

    await this.getCube();
    await this.gteCube2();

    // formatters
    const buffer = await SheetFormatter();

    return buffer;
  }
}

export { AnalyticUseCase };
