import { Module } from '@nestjs/common';
import { PersonsModule } from './_application/modules/persons.module';
import { ManagerModule } from './_application/modules/manager.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './_domain/entities/person.entity';
import { Business } from './_domain/entities/business.entity';
import { BusinessModule } from './_application/modules/business.module';
import { Address } from './_domain/entities/address.entity';
import { Manager } from './_domain/entities/manager.entity';
import { DataSourceModule } from './_infrastructure/database/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
require('dotenv').config();


@Module({
  imports: [DataSourceModule, PersonsModule, ManagerModule, BusinessModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
