import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from '@netlify/functions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless.createHandler(expressApp);
}

export const handler = bootstrap();
