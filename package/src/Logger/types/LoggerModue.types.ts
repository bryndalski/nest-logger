import { LogLevel, LoggerService } from '@nestjs/common';

export interface ILoggerModuleRootOptions extends Partial<LoggerService> {
  /**
   * Production mode. Diable sending logs to api.
   */
  production?: boolean;

  /**
   * Api access token
   */
  apiToken: string;

  /**
   * Displayed log levels. By default all levels are displayed.
   * @default ['log', 'error', 'warn', 'debug', 'verbose']
   * @example ['log', 'error']
   */
  logLevels?: LogLevel[];

  /**
   * Log levels send to api
   */
  persistLogLevels: LogLevel[];
}
