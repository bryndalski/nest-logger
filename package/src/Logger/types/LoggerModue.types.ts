import { LogLevel, LoggerService } from '@nestjs/common';

export type LoggerModuleRootOptions = {
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
  persistLogLevels: (keyof LogLevel)[];
} & Partial<LoggerService>;
