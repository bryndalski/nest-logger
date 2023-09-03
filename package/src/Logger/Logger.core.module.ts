import { DynamicModule, Global, Module } from '@nestjs/common';
import { LoggerService } from './Logger.service';
import { LoggerModuleRootOptions } from './types/LoggerModue.types';

@Global()
@Module({})
export class LoggerModuleCore {
  static rootLogger(options: LoggerModuleRootOptions): DynamicModule {
    return {
      module: LoggerModuleCore,
      providers: [LoggerService],
    };
  }

  static forSubmodule(options: any): DynamicModule {
    return {
      module: LoggerModuleCore,
      providers: [LoggerService],
    };
  }
}
