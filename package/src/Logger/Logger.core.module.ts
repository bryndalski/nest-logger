import { DynamicModule, Global, Module } from '@nestjs/common';
import { LoggerService } from './Logger.service';

@Global()
@Module({})
export class LoggerModuleCore {
  // options: LoggerModuleRootOptions
  static rootLogger(): DynamicModule {
    return {
      module: LoggerModuleCore,
      providers: [LoggerService],
    };
  }

  static forSubmodule(): DynamicModule {
    return {
      module: LoggerModuleCore,
      providers: [LoggerService],
    };
  }
}
