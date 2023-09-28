import { ILoggerModuleRootOptionsOptional } from 'src/Logger/types';
import {
  ILoggerModuleRootOptions,
  LoggerModule,
  LoggerService,
} from '../../src';
import { Test, TestingModule } from '@nestjs/testing';
const loggerOptions: ILoggerModuleRootOptions = {
  apiToken: '1234',
  logLevels: ['debug', 'error', 'log', 'verbose', 'warn'],
};

const optionalLoggerOptions: ILoggerModuleRootOptionsOptional = {
  apiToken: 'new_api_token',
  logLevels: ['log', 'verbose', 'warn'],
};

describe('Logger module', () => {
  let loggerService: LoggerService;
  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const app: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule.register(loggerOptions)],
      providers: [LoggerService],
    }).compile();

    loggerService = app.get<LoggerService>(LoggerService);
  });

  describe('Service accessability tests', () => {
    it('Logger should be definedq"', () => {
      expect(loggerService).toBeDefined();
    });

    it('Logger should have properity "loggerOptions"', () => {
      expect(loggerService).toHaveProperty('loggerOptions');
    });

    it('Network options should equal loggerOptions, passed to forRoot method', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      expect((loggerService as any).loggerloggerOptions).toEqual(loggerOptions);
    });

    it('Logger should have Static properity, loggerOptions', () => {
      expect(LoggerService.loggerOptions).toEqual(loggerOptions);
    });
  });

  describe('Logger service - configuration overrite', () => {
    let newLoggerService: LoggerService;
    beforeAll(() => {
      newLoggerService = new LoggerService('test', optionalLoggerOptions);
    });

    it('New logger instance should be defined', () => {
      expect(newLoggerService).toBeDefined();
    });

    it('New logger instance should have updated configuration equal to optionalLoggerOptions', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      expect((newLoggerService as any).loggerloggerOptions).toEqual(
        optionalLoggerOptions,
      );
    });

    it('Expect logger static to remain unchanged', () => {
      expect(LoggerService.loggerOptions).toEqual(loggerOptions);
    });
  });
});
