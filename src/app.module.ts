import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PersonsModule } from './application/modules/persons.module';
import { ManagerModule } from './application/modules/manager.module';
import { AccountModule } from './account/account.module';
import { BusinessModule } from './application/modules/business.module';
import { DataSourceModule } from './infrastructure/database/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorMiddleware } from './application/services/erros';
require('dotenv').config();


@Module({
  imports: [DataSourceModule, PersonsModule, ManagerModule, BusinessModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(ErrorMiddleware)
      .forRoutes({path: '*', method: RequestMethod.ALL})
  }
}
