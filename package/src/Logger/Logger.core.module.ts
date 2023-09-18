import { Global, Module } from '@nestjs/common';
import { LoggerService } from './Logger.service';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_TOKEN,
} from './Symbols/ProviderNames.enum';

@Global()
@Module({
  providers: [
    {
      provide: LOGGER_OPTIONS,
      useFactory: () => ({}),
    },
    {
      provide: LOGGER_SERVICE_TOKEN,
      useClass: LoggerService,
    },
  ],
  exports: [LOGGER_SERVICE_TOKEN, LOGGER_OPTIONS],
})
export class LoggerModuleCore {}
