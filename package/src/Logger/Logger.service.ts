import { ConsoleLogger, Injectable, Optional } from '@nestjs/common';
import {
  ILoggerModuleRootOptions,
  ILoggerModuleRootOptionsOptional,
} from './types';

@Injectable()
export class LoggerService extends ConsoleLogger {
  protected networkOptions: ILoggerModuleRootOptions;
  static networkOptions: ILoggerModuleRootOptions;

  private set loggerNetworkOptions(value: ILoggerModuleRootOptions) {
    super.log(`Initializing new logger service`);
    LoggerService.networkOptions = value;
    this.networkOptions = value;
  }

  private get loggerNetworkOptions(): ILoggerModuleRootOptionsOptional {
    return this.networkOptions;
  }

  constructor();
  constructor(context?: string);
  constructor(
    context: string,
    networkOptions: ILoggerModuleRootOptionsOptional,
  );
  constructor(
    @Optional()
    protected context?: string,
    @Optional()
    networkOptions?: ILoggerModuleRootOptionsOptional,
  ) {
    super();
    this.networkOptions = {
      ...LoggerService.networkOptions,
      ...networkOptions,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(message: any, context?: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.log(
      {
        m: message,
        c: context || this.context,
        op: this.networkOptions,
        no: LoggerService.networkOptions,
      },
      context || this.context,
    );
  }
}
