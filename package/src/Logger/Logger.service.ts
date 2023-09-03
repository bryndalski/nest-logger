import { ConsoleLogger, Inject } from '@nestjs/common';
import { ProviderNames } from './enums/ProviderNames.enum';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

export class LoggerService extends ConsoleLogger {
  constructor(
    @Inject(ProviderNames.LOGGER_OPTIONS)
    private networkOptions: LoggerModuleRootOptions,
  ) {
    super();
  }

  log(message: any, context?: string): void {
    this.log(this.options);
    this.log(message, context);
    this.log('Hej im not gey', context);
  }
}
