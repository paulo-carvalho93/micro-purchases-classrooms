import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { MessasingModule } from './messasing/messasing.module';
@Module({
  imports: [DatabaseModule, HttpModule, MessasingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
