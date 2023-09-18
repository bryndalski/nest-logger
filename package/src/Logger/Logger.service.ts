import { ConsoleLogger, Inject, Optional } from '@nestjs/common';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_CONTEXT,
} from './enums/ProviderNames.enum';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

export class LoggerService extends ConsoleLogger {
  constructor(
    @Optional()
    @Inject(LOGGER_OPTIONS)
    private readonly networkOptions?: LoggerModuleRootOptions,

    @Optional()
    @Inject(LOGGER_SERVICE_CONTEXT)
    private readonly internalContext?: string,
  ) {
    super(internalContext);
    super.log('LoggerService constructor');
    super.log(this.networkOptions, this.internalContext);
  }

  log(message: any): void {
    super.log(this.options);
    super.log(message);
  }
}
