import { ConsoleLogger, Injectable, Optional } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

@Injectable()
export class LoggerService extends ConsoleLogger {
  private networkOptions: LoggerModuleRootOptions;
  static networkOptions: LoggerModuleRootOptions;

  private set loggerNetworkOptions(value: LoggerModuleRootOptions) {
    console.log(
      `Initializing new instance with value of ${JSON.stringify(value)}`,
    );
    this.networkOptions = { ...LoggerService.networkOptions };
  }

  constructor();
  constructor(context?: string);
  constructor(context: string, networkOptions: LoggerModuleRootOptions);
  constructor(
    @Optional()
    protected context?: string,
  ) {
    super();
    console.log(`Initial ${context}`);

    console.log({
      context: this.context,
      networkOptions: this.networkOptions,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(message: any, context?: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super.log(
      {
        m: message,
        c: context || this.context,
        op: this.loggerNetworkOptions,
      },
      context || this.context,
    );
    // super.log(this.context);
    // super.log(this.networkOptions);
  }
}
