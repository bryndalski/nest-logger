import { ConsoleLogger, Inject, Optional } from '@nestjs/common';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_CONTEXT,
} from './Symbols/ProviderNames.enum';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

export class LoggerService extends ConsoleLogger {
  constructor();
  constructor(internalContext: string);
  constructor(internalContext: string, networkOptions: LoggerModuleRootOptions);
  constructor(
    @Optional()
    @Inject(LOGGER_SERVICE_CONTEXT)
    private readonly internalContext?: string,
    @Optional()
    @Inject(LOGGER_OPTIONS)
    private readonly networkOptions?: LoggerModuleRootOptions,
  ) {
    super(internalContext);
    super.log('LoggerService constructor');
    super.log(this.networkOptions, this.internalContext);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(message: any): void {
    super.log(message);
  }
}
