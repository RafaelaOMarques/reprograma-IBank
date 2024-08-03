import { Module } from '@nestjs/common';
import { PersonService } from '../services/persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../../_domain/entities/person.entity';
import { PersonController } from '../controllers/persons.controller';
import { PersonRepository } from '../../_domain/repositories/persons.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
  exports:[PersonService, PersonRepository]
})
export class PersonsModule {}
