import { ConsoleLogger, LogLevel } from '@nestjs/common';
import { LoggerService } from '../../src';

describe('Allowed methods - log level tests', () => {
  describe('Should allow log methods - when log levels are passed', () => {
    it.each(['log', 'debug', 'error', 'warn', 'verbose'])(
      'Method %s should be allowed',
      (logLevel: LogLevel) => {
        const logger = new LoggerService('test', {
          logLevels: [logLevel],
        });
        //spy
        const loggerSpyOnLog = jest.spyOn(ConsoleLogger.prototype, logLevel);
        const sypOnLogger = jest.spyOn(logger, logLevel);
        // start logging
        logger[logLevel]('test', 'fake');
        //Checks
        expect(sypOnLogger).toBeCalledWith('test', 'fake');
        expect(loggerSpyOnLog).toBeCalled();
        loggerSpyOnLog.mockClear();
      },
    );
  });

  describe('Should allow all log levels, when LogLevels is not passed', () => {
    let logger: LoggerService;
    beforeAll(() => {
      logger = new LoggerService();
    });

    it.each(['log', 'debug', 'error', 'warn', 'verbose'])(
      'Method %s should be allowed',
      (logLevel: LogLevel) => {
        const loggerSpyOnLog = jest.spyOn(ConsoleLogger.prototype, logLevel);
        const sypOnLogger = jest.spyOn(logger, logLevel);
        // start logging
        logger[logLevel]('test', 'fake');
        //Checks
        expect(sypOnLogger).toBeCalledWith('test', 'fake');
        expect(loggerSpyOnLog).toBeCalled();
        loggerSpyOnLog.mockClear();
      },
    );
  });

  describe('Should not allow log, which are not present', () => {
    it.each([
      ['log', ['debug', 'error', 'warn', 'verbose']],
      ['debug', ['log', 'error', 'warn', 'verbose']],
      ['error', ['log', 'debug', 'warn', 'verbose']],
      ['warn', ['log', 'debug', 'error', 'verbose']],
      ['verbose', ['log', 'debug', 'error', 'warn']],
    ])(
      'Method %s should be allowed when logs levels are %s',
      (testedLevel: LogLevel, logLevels: LogLevel[]) => {
        const internalLogger = new LoggerService('test', {
          logLevels,
        });
        const loggerSpyOnLog = jest.spyOn(ConsoleLogger.prototype, testedLevel);
        const sypOnLogger = jest.spyOn(internalLogger, testedLevel);
        // start logging
        internalLogger[testedLevel]('test', 'fake');
        //Checks
        expect(sypOnLogger).toBeCalledWith('test', 'fake');
        expect(loggerSpyOnLog).not.toBeCalled();
        loggerSpyOnLog.mockClear();
      },
    );
  });
});
