import { Inject } from '@nestjs/common';
import { LOGGER_SERVICE_CONTEXT } from '../enums/ProviderNames.enum';

export const SetLoggerContext = (
  context: string,
  dataSource: string = LOGGER_SERVICE_CONTEXT,
): ReturnType<typeof Inject> => Inject(dataSource);
