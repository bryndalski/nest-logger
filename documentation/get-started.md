<h1 style="text-align:center"> Get started </h1>

### Table of contents

- [Initialization](#initialization)
  - [As a module](#as-a-module)
  - [As a service](#as-a-service)

## Initialization

### As a module

in your app.module.ts

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from '@bryndalski/nest-logger';
@Module({
  imports: [
    LoggerModule.register({
      persistLogLevels: ['debug', 'log', 'warn', 'error'],
      logLevels: ['debug', 'warn', 'error'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

in your `main.ts`

```
import { LoggerService } from '@bryndalski/nest-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(LoggerService));
  await app.listen(3000);
}
bootstrap();
```

### As a service

```
new LoggerService(context,options)
```

where:

- context is name of your service
- options is configuration object. Check [available options](./available-options.md) for more details

in your service.service.ts

```
import { LoggerService } from '@bryndalski/nest-logger/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: LoggerService;
  constructor() {
    this.logger = new LoggerService('Service name');
  }
 ....
}
```

You can override configuration provided with `.register` method by passing it to constructor of `LoggerService` class. This configuration will be merged with configuration provided in `.register` method.

```
constructor() {
    this.logger = new LoggerService('Service name',{
        your configuration
    });
}
```
