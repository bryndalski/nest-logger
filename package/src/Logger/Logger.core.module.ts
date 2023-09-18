import { Global, Module } from '@nestjs/common';
import { LoggerService } from './Logger.service';
import {
  LOGGER_OPTIONS,
  LOGGER_SERVICE_TOKEN,
} from './enums/ProviderNames.enum';

@Global()
@Module({
  providers: [
    {
      provide: LOGGER_OPTIONS,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
