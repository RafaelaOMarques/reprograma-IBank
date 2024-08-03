import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm"
import { Person } from "../entities/person.entity";


 
@Injectable()
export class PersonRepository{
  
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]>{
    //SELECT * FROM person
    return await this.personRepository.find({relations: ['address']});
  }

  async findById(id: string): Promise<Person> {
    return await this.personRepository.findOne({
      where: {id},
      relations: ['address']
    });
  }

  async save(person: Person): Promise<Person>{
    //CREATE
    return await this.personRepository.save(person);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.personRepository.delete({id});
    return result.affected > 0;
  }
}
