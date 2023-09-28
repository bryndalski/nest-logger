import { ILoggerModuleRootOptions, LoggerModule } from '../../src';

const loggerOptions: ILoggerModuleRootOptions = {
  apiToken: '1234',
  logLevels: ['debug', 'error', 'log', 'verbose', 'warn'],
};

describe('Logger module', () => {
  let logger: LoggerModule;
  beforeAll(() => {
    logger = LoggerModule.register(loggerOptions);
  });

  describe('Module should have predefined properities', () => {
    it('Logger should be definedq"', () => {
      expect(logger).toBeDefined();
    });
    it.each(['module', 'global', 'providers', 'exports'])(
      'Expect module to have properity %s',
      (a) => {
        expect(logger).toHaveProperty(a);
      },
    );
  });
});
