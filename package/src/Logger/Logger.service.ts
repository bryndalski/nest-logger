import { ConsoleLogger, Inject } from '@nestjs/common';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_CONTEXT,
} from './Symbols/ProviderNames.enum';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

export class LoggerService extends ConsoleLogger {
  constructor();
  constructor(context?: string);
  constructor(context: string, networkOptions: LoggerModuleRootOptions);
  constructor(
    @Inject(LOGGER_SERVICE_CONTEXT)
    protected context?: string,
    @Inject(LOGGER_OPTIONS)
    private readonly networkOptions?: LoggerModuleRootOptions,
  ) {
    super();
    console.log(networkOptions);
    console.log(this.networkOptions);
    super.log(this.networkOptions, this.context);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(message: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.log({ m: message, c: this.context, n: this.networkOptions });
    // super.log(this.context);
    // super.log(this.networkOptions);
  }
}
