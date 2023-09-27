import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { LoggerModuleCore } from './Logger.core.module';
import { LoggerService } from './Logger.service';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_TOKEN,
} from './Symbols/ProviderNames.enum';

@Module({
  imports: [LoggerModuleCore],
  providers: [{ provide: LoggerService, useExisting: LOGGER_SERVICE_TOKEN }],
  exports: [LoggerModuleCore, LoggerService],
})
export class LoggerModule {
  static forRoot(options: LoggerModuleRootOptions): DynamicModule {
    const loggerServiceProvider = {
      provide: LoggerService,
      useFactory: (loggerService: LoggerService) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (loggerService as any).loggerNetworkOptions = options;
        LoggerService.networkOptions = options;
        return loggerService;
      },
      inject: [LOGGER_SERVICE_TOKEN, LOGGER_OPTIONS],
    };
    console.log(options);
    return {
      module: LoggerModule,
      global: true,
      providers: [loggerServiceProvider],
      exports: [LoggerService],
    };
  }
}
