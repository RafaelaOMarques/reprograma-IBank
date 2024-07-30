import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';
import { ManagerModule } from './manager/manager.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/entities/person.entity';
import { Business } from './business/entities/business.entity';
import { BusinessModule } from './business/business.module';


@Module({
  imports: [PersonsModule, ManagerModule, AccountModule, BusinessModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'data.db',
    entities: [Person, Business],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
