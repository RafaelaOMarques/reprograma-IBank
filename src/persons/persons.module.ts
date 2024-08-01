import { Module } from '@nestjs/common';
import { PersonService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonController } from './persons.controller';
import { PersonRepository } from './persons.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
  exports:[PersonService, PersonRepository]
})
export class PersonsModule {}
