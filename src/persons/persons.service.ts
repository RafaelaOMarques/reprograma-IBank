import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PatchPersonDto } from './dto/patch-person.dto';


@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ){}

  async findAll(): Promise<Person[]>{
    return this.personRepository.find()
  }

  //GET ONE
  async findOne(id: number): Promise<Person> {
    return this.personRepository.findOne({where: {id}});
  }

  //POST
  async create(createPersonDto: CreatePersonDto): Promise<Person> {

    const newPerson = this.personRepository.create({
      name: createPersonDto.name,
      cpf: createPersonDto.cpf,
      address: createPersonDto.address,
      telephone: createPersonDto.telephone,
      salary: createPersonDto.salary
    });
    return this.personRepository.save(newPerson);
  }

  //PATCH
  async patch(id: number, patchPersonDto: PatchPersonDto): Promise<Person> {
    await this.personRepository.update(id, patchPersonDto);
    return this.personRepository.findOne({where: {id}})
  }

  //PUT
  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    await this.personRepository.update(id, updatePersonDto);
    return this.personRepository.findOne({where: {id}})
  }

  //DELETE
  async remove(id: number): Promise<void> {
    await this.personRepository.delete({id})
  }
}
