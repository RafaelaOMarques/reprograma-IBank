import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm"
import { Manager } from "../entities/manager.entity";


 
@Injectable()
export class ManagerRepository{
  
  constructor(
    @InjectRepository(Manager)
    private readonly managerRepository: Repository<Manager>,
  ) {}

  async findAll(): Promise<Manager[]>{
    //SELECT * FROM person
    return await this.managerRepository.find({relations: ['address']});
  }

  async findById(id: string): Promise<Manager> {
    return await this.managerRepository.findOne({
      where: {id},
      relations: ['address']
    });
  }

  async save(manager: Manager): Promise<Manager>{
    //CREATE
    return await this.managerRepository.save(manager);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.managerRepository.delete({id});
    return result.affected > 0;
  }
}
