import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma/prisma.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [PrismaModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
