import { EHttpCodes } from '../enums/EHttpCodes';

export class Exception {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = EHttpCodes.REQUISICAO_RUIM) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
