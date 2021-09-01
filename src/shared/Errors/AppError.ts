class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly name: string;

  constructor(message: string, statusCode = 400, name = '') {
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;
  }
}

export { AppError };
