import { LogLevel, LoggerService, Type } from '@nestjs/common';
import { Interface } from 'readline';

export interface ILoggerModuleRootOptions extends Partial<LoggerService> {
  /**
   * If set to true logger will not print logs with debug level. It will also not send logs to external logging service.
   * @default false
   */
  production?: boolean;

  /**
   * Api access token
   * @default ''
   *
   */
  apiToken: string;

  /**
   * Displayed log levels. By default all levels are displayed.
   * @default ['log', 'error', 'warn', 'debug', 'verbose','fatal']
   * @example ['log', 'error']
   */
  logLevels?: LogLevel[];

  /**
   * Log levels send to api
   * @default ['log', 'error', 'warn', 'fatal']
   * @example ['log', 'error']
   */
  apiLogLevels?: LogLevel[];

  /**
   * Forces log schema. If not set, schema will be ignored.
   */
  logSchema?: Interface | Type;
}
