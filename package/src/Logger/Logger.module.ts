import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';
import { LoggerModuleCore } from './Logger.core.module';

@Module({})
export class LoggerModule {
  static root(options: LoggerModuleRootOptions): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerModuleCore.rootLogger(options)],
    };
  }

  static forSubmodule(): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerModuleCore.forSubmodule({})],
    };
  }
}
