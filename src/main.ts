import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from './env';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const configService = app.get<ConfigService<Env>>(ConfigService);
  const port = configService.get('PORT', { infer: true });

  await app.listen(Number(port));
}
bootstrap();
