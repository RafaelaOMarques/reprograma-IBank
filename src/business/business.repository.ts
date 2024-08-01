import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm"
import { Business } from "./entities/business.entity";


 
@Injectable()
export class BusinessRepository{
  
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async findAll(): Promise<Business[]>{
    return await this.businessRepository.find({relations: ['address']});
  }

  async findById(id: string): Promise<Business> {
    return await this.businessRepository.findOne({
      where: {id},
      relations: ['address']
    });
  }

  async save(business: Business): Promise<Business>{
    return await this.businessRepository.save(business);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.businessRepository.delete({id});
    return result.affected > 0;
  }
}
