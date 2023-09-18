import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { LoggerModuleCore } from './Logger.core.module';
import { LoggerService } from './Logger.service';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_TOKEN,
} from './enums/ProviderNames.enum';

@Module({
  imports: [LoggerModuleCore],
  providers: [{ provide: LoggerService, useExisting: LOGGER_SERVICE_TOKEN }],
  exports: [LoggerModuleCore, LoggerService],
})
export class LoggerModule {
  // static root(options: LoggerModuleRootOptions): DynamicModule {
  //   return {
  //     module: LoggerModule,
  //     imports: [LoggerModuleCore.rootLogger(options)],
  //   };
  // }

  // static forSubmodule(): DynamicModule {
  //   return {
  //     module: LoggerModule,
  //     imports: [LoggerModuleCore.forSubmodule({})],
  //   };import { LoggerModule } from './Logger.module';

  // }

  static forRoot(options: LoggerModuleRootOptions): DynamicModule {
    const loggerServiceProvider = {
      provide: LoggerService,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      useFactory: (loggerService: LoggerService) => {
        return loggerService;
      },
      inject: [LOGGER_SERVICE_TOKEN],
    };

    return {
      module: LoggerModule,
      global: true,
      providers: [
        loggerServiceProvider,
        {
          provide: LOGGER_OPTIONS,
          useValue: options,
        },
      ],
      exports: [LoggerService],
    };
  }
}
