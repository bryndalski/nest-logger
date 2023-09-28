import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModuleCore } from './Logger.core.module';
import { LoggerService } from './Logger.service';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_TOKEN,
} from './Symbols/ProviderNames.enum';
import { ILoggerModuleRootOptions } from './types';

@Module({
  imports: [LoggerModuleCore],
  providers: [{ provide: LoggerService, useExisting: LOGGER_SERVICE_TOKEN }],
  exports: [LoggerModuleCore, LoggerService],
})
export class LoggerModule {
  static register(options: ILoggerModuleRootOptions): DynamicModule {
    const loggerServiceProvider = {
      provide: LoggerService,
      useFactory: (loggerService: LoggerService) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        (loggerService as any).loggerloggerOptions = options;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // LoggerService.loggerOptions = options;
        return loggerService;
      },
      inject: [LOGGER_SERVICE_TOKEN, LOGGER_OPTIONS],
    };
    return {
      module: LoggerModule,
      global: true,
      providers: [loggerServiceProvider],
      exports: [LoggerService],
    };
  }
}
