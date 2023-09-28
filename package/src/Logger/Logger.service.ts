import { ConsoleLogger, Injectable, Optional } from '@nestjs/common';
import {
  GenericLogType,
  ILoggerModuleRootOptions,
  ILoggerModuleRootOptionsOptional,
} from './types';

@Injectable()
export class LoggerService extends ConsoleLogger {
  protected loggerOptions: ILoggerModuleRootOptions;
  static loggerOptions: ILoggerModuleRootOptions;

  /**
   * Initializes logger options
   */
  private set loggerloggerOptions(value: ILoggerModuleRootOptions) {
    super.log(`Initializing new logger service`);
    LoggerService.loggerOptions = value;
    this.loggerOptions = value;
  }

  private get loggerloggerOptions(): ILoggerModuleRootOptionsOptional {
    return this.loggerOptions;
  }

  /**
   * Creates logger message
   * @param message <T> Message param type
   * @returns GenericLogType<T> message which should be displayed with logger
   */
  private createLoggerMessage<T>(
    message: T,
    context: GenericLogType<T>['context'],
  ): GenericLogType<T> {
    return {
      logType: 'log',
      context,
      message: {
        message,
        type: typeof message,
      },
      logTimestamp: new Date(),
    };
  }

  constructor();
  constructor(context?: string);
  constructor(context: string, loggerOptions: ILoggerModuleRootOptionsOptional);
  constructor(
    @Optional()
    protected context?: string,
    @Optional()
    loggerOptions?: ILoggerModuleRootOptionsOptional,
  ) {
    super();
    this.loggerOptions = {
      ...LoggerService.loggerOptions,
      ...loggerOptions,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log<T>(message: T, context?: string): void {
    //Prevents console function for loggin
    if (
      this.loggerOptions.logLevels &&
      !this.loggerOptions.logLevels.includes('log')
    )
      return;
    const logFormat = this.createLoggerMessage<T>(message, context);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.log(logFormat, context || this.context);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.loggerOptions.logLevels &&
      !this.loggerOptions.logLevels.includes('error')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.error(message, context || this.context);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.loggerOptions.logLevels &&
      !this.loggerOptions.logLevels.includes('warn')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.warn(message, context || this.context);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.loggerOptions.logLevels &&
      !this.loggerOptions.logLevels.includes('debug')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.debug(message, context || this.context);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  verbose(message: any, context?: string): void {
    //Prevents console function for loggin
    if (
      this.loggerOptions.logLevels &&
      !this.loggerOptions.logLevels.includes('verbose')
    )
      return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.verbose(message, context || this.context);
  }
}
