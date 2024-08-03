import { Controller, Get, Post, Body, Patch, OnApplicationShutdown, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { PersonService } from '../services/persons.service';
import { CreatePersonDto } from '../../application/dto/create-person.dto';
import { UpdatePersonDto } from '../../application/dto/update-person.dto';
import { Person } from '../../domain/entities/person.entity';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  
  @Get()
  async listPersons(): Promise<Person[]> {
    return await this.personService.listPersons();
  }

  @Get(':id')
  async listPersonById(@Param('id') id: string): Promise<Person> {
    return await this.personService.listPersonById(id);
  }

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
    const { name, cpf, telephone, salary, zipCode } = createPersonDto;
    return this.personService.newPerson(name, cpf, telephone, salary, zipCode);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto){
    try{
      return this.personService.updatePerson(
        id, 
        updatePersonDto.name, 
        updatePersonDto.cpf, 
        updatePersonDto.telephone, 
        updatePersonDto.salary, 
        updatePersonDto.zipcode, 
      );
    }catch(error){
      throw new BadRequestException({ error: error.message})
    }
  }
    // @Patch(':id')
  // modify(@Param('id') id: number, @Body() patchPersonDto: PatchPersonDto): Promise<Person> {
  //   return this.personService.patch(id, patchPersonDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.removePerson(id);
  }
}

