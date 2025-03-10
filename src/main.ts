import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { Handler } from '@netlify/functions';
import * as serverless from 'serverless-http';

async function bootstrap(): Promise<Handler> {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  await app.init();

  return serverless(expressApp); // Convert Express to a Serverless Handler
}

export const handler: Handler = async (event, context) => {
  const nestHandler = await bootstrap();
  return nestHandler(event, context);
};
