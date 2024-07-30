import { Controller, Get, Post, Body, Patch, OnApplicationShutdown, Param, Delete, Put } from '@nestjs/common';
import { PersonService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { PatchPersonDto } from './dto/patch-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Person> {
    return this.personService.findOne(id);
  }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
    return this.personService.create(createPersonDto);
  }

  @Patch(':id')
  modify(@Param('id') id: number, @Body() patchPersonDto: PatchPersonDto): Promise<Person> {
    return this.personService.patch(id, patchPersonDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePersonDto: UpdatePersonDto): Promise<Person>{

    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}

