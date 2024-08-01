import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';
import { ManagerModule } from './manager/manager.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/entities/person.entity';
import { Business } from './business/entities/business.entity';
import { BusinessModule } from './business/business.module';
import { Address } from './address/address.entity';
require('dotenv').config();


@Module({
  imports: [TypeOrmModule.forRoot({
    //------CONFIGURAÇÃO PARA USAR O POSTGRES
    type: 'postgres',
    host: 'localhost',
    port: 5432, 
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    entities: [Person, Business, Address],
    synchronize: true,
  }), PersonsModule, ManagerModule, AccountModule, BusinessModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
