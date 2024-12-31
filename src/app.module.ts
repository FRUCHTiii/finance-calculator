import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateController } from './calculate/calculate.controller';

@Module({
  imports: [],
  controllers: [AppController, CalculateController],
  providers: [AppService],
})
export class AppModule {}
