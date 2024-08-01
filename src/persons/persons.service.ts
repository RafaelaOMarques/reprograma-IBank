import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from './persons.repository';
import { Address } from 'src/address/address.entity';
import { ViaCepService } from 'src/third-party/via-cep/via-cep.service';
import { PersonValidator } from 'src/shared/utils/persons.validator';

  //TODO: Criar message error custumizada

@Injectable()
export class PersonService {
  private persons: Person[] = []
  constructor(
    private readonly personRepository: PersonRepository
  ){}

  async listPersons(): Promise<Person[]>{
    return await this.personRepository.findAll()
  }

  //GET ONE
  async listPersonById(id: string): Promise<Person> {
    const person = await this.personRepository.findById(id);
    if(!person) {
      throw new Error('Person not found')
    }
    return person
  }

  //POST
  async newPerson(
    name: string,
    cpf: string,
    telephone: string,
    salary: number,
    zipCode?: string,
    complement?: string,
  ): Promise<Person> {

    PersonValidator.verifyCpf(cpf);
    PersonValidator.checkCpfAlreadyInUse(this.persons, cpf);

    let address: Address = null;

    if (zipCode) {
      address = await ViaCepService.getAddress(zipCode);
      if(complement){
        address.complement = complement;
      }
    }

    const person = new Person(name, cpf, telephone, salary);
    person.address = address;
    this.persons.push(person);
    return await this.personRepository.save(person);
  }


  //PUT
  async updatePerson(
    id: string,
    name: string,
    cpf: string,
    telephone: string,
    salary: number,
    zipCode: string,
  ): Promise<Person | null > {

    const person  = await this.listPersonById(id);

    if (!person) {
      throw new Error('Person not found');
    }
    
    if (person){
      person.name = name;
      person.cpf = cpf;
      person.telephone = telephone;
      person.salary = salary;

      if (zipCode) {
        person.address = await ViaCepService.getAddress(zipCode);
      }

      return await this.personRepository.save(person)
    }
    return null;
  }
  
  //PATCH
  // async patch(id: number, patchPersonDto: PatchPersonDto): Promise<Person> {
  //   await this.personRepository.update(id, patchPersonDto);
  //   return this.personRepository.findById(id)
  // }

  //DELETE
  async remove(id: string): Promise<void> {
    await this.personRepository.delete(id)
  }
}
