import { ConsoleLogger } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { LoggerApiService } from './Api.service';

export class LoggerService extends ConsoleLogger {
  private readonly apiService = new LoggerApiService();
  constructor(private readonly networkOptions?: LoggerModuleRootOptions) {
    super();
    console.log('INITIATING_GLOBAL_LOGGER');
  }

  public log(message, context?: string): void {
    console.log('====================================');
    console.log(this.networkOptions);
    console.log('====================================');
    super.log(this.networkOptions, context);
    super.log(message, context);
    this.apiService.sendToApi();
  }
}
