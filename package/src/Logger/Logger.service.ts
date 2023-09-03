import { ConsoleLogger, Inject, Logger } from '@nestjs/common';
import { ProviderNames } from './enums/ProviderNames.enum';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

export class LoggerService extends ConsoleLogger {
  constructor(
    @Inject(ProviderNames.LOGGER_OPTIONS)
    private networkOptions: LoggerModuleRootOptions,
  ) {
    super();
  }

  log(message: any, context?: string) {
    this.log(message, context);
    this.log('Hej im not gey', context);
  }
}
