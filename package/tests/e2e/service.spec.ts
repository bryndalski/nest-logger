import { ILoggerModuleRootOptionsOptional } from 'src/Logger/types';
import {
  ILoggerModuleRootOptions,
  LoggerModule,
  LoggerService,
} from '../../src';
import { Test, TestingModule } from '@nestjs/testing';
const loggerOptions: ILoggerModuleRootOptions = {
  apiToken: '1234',
  persistLogLevels: ['debug', 'error', 'log', 'verbose', 'warn'],
};

const optionalLoggerOptions: ILoggerModuleRootOptionsOptional = {
  apiToken: 'new_api_token',
  persistLogLevels: ['log', 'verbose', 'warn'],
};

describe('Logger module', () => {
  let loggerService: LoggerService;
  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const app: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule.forRoot(loggerOptions)],
      providers: [LoggerService],
    }).compile();

    loggerService = app.get<LoggerService>(LoggerService);
  });

  describe('Service accessability tests', () => {
    it('Logger should be definedq"', () => {
      expect(loggerService).toBeDefined();
    });

    it('Logger should have properity "networkOptions"', () => {
      expect(loggerService).toHaveProperty('networkOptions');
    });

    it('Network options should equal loggerOptions, passed to forRoot method', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      expect((loggerService as any).loggerNetworkOptions).toEqual(
        loggerOptions,
      );
    });

    it('Logger should have Static properity, networkOptions', () => {
      expect(LoggerService.networkOptions).toEqual(loggerOptions);
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
      expect((newLoggerService as any).loggerNetworkOptions).toEqual(
        optionalLoggerOptions,
      );
    });

    it('Expect logger static to remain unchanged', () => {
      expect(LoggerService.networkOptions).toEqual(loggerOptions);
    });
  });
});
