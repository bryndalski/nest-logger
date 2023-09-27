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
    //Prevents console function for loggin
    if (
      this.networkOptions.logLevels &&
      !this.networkOptions.logLevels.includes('log')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.log(context || this.context);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.networkOptions.logLevels &&
      !this.networkOptions.logLevels.includes('error')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.error(context || this.context);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.networkOptions.logLevels &&
      !this.networkOptions.logLevels.includes('warn')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.error(context || this.context);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.networkOptions.logLevels &&
      !this.networkOptions.logLevels.includes('debug')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.error(context || this.context);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  verbose(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.networkOptions.logLevels &&
      !this.networkOptions.logLevels.includes('verbose')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.error(context || this.context);
  }
}
