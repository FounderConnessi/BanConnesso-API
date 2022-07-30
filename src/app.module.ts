import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BanModule } from './ban/ban.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    BanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
