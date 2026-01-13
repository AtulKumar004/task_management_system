import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interfaces/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 1. Enable Validation
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // 2. Enable Global Success Response Interceptor
  app.useGlobalInterceptors(new TransformInterceptor());

  // 3. Enable Global Error Filter
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
