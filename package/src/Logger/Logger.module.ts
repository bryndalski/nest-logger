import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { LoggerModuleCore } from './Logger.core.module';
import { LoggerService } from './Logger.service';

@Module({})
export class LoggerModule {
  static forRoot(options: LoggerModuleRootOptions): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerModuleCore.forRoot(options)],
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: LoggerModule,
      providers: [LoggerService],
    };
  }
}
