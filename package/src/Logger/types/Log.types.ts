import { LogLevel } from '@nestjs/common';

export type GenericLogType<T> = {
  logType: LogLevel;
  message: {
    message: T;
    type: string;
  };
  context: string;
  logContext?: string;
  logTimestamp: Date;
};
