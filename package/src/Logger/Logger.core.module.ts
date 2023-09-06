import {
  DynamicModule,
  Global,
  Inject,
  Module,
  Provider,
} from '@nestjs/common';
import { LoggerService } from './Logger.service';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { ProviderNames } from './enums/ProviderNames.enum';

@Global()
@Module({})
export class LoggerModuleCore {
  constructor(
    @Inject(ProviderNames.LOGGER_OPTIONS)
    private readonly options: LoggerModuleRootOptions,
  ) {}

  // options: LoggerModuleRootOptions
  static forRoot(options: LoggerModuleRootOptions): DynamicModule {
    const LoggerCoreModuleOptions = {
      provide: ProviderNames.LOGGER_OPTIONS,
      useValue: options,
    };

    console.log(options);
    const loggerServiceProvider: Provider = {
      provide: LoggerService,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      useFactory: (options) => new LoggerService(options),
      inject: [ProviderNames.LOGGER_OPTIONS],
    };

    return {
      module: LoggerModuleCore,
      providers: [LoggerCoreModuleOptions, loggerServiceProvider],
      exports: [loggerServiceProvider, LoggerCoreModuleOptions],
    };
  }
}
