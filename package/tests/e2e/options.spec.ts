import { LoggerService } from '../../src/Logger/Logger.service';

describe('Testing - LoggerService.createLoggerMessage', () => {
  describe.each(['string', 1, undefined, NaN, { message: '123' }, true, Error])(
    'Testing log function, initalized with "%p" param',
    (initParam) => {
      let mockImplementation: any;

      beforeAll(() => {
        const sypOnLogger = jest.spyOn(
          LoggerService.prototype as any,
          'createLoggerMessage',
        );
        const getSumImplementation = sypOnLogger.getMockImplementation();
        // start logging
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        mockImplementation = getSumImplementation(initParam, 'test');
      });

      it('Return should be defined', () => {
        expect(mockImplementation).toBeDefined();
      });

      it.each([
        'logType',
        'context',
        'message',
        'logTimestamp',
        'message.type',
        'message.message',
      ])('return should have properity %s', (prop) => {
        expect(mockImplementation).toHaveProperty(prop);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });
    },
  );
});
