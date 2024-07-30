import { Injectable } from '@nestjs/common';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { PatchBusinessDto } from './dto/patch-business.dto';


@Injectable()
export class BusinessService {
  constructor( 
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>
  ){}

  async findAll(): Promise<Business[]> {
    return this.businessRepository.find();
  }

  async findOne(id: number): Promise<Business> {
    return this.businessRepository.findOne({where: {id}});
  }

  async create(createBusinessDto: CreateBusinessDto): Promise<Business> {
    const newBusiness = this.businessRepository.create({
      name: createBusinessDto.name,
      cnpj: createBusinessDto.cnpj,
      address: createBusinessDto.address,
      telephone: createBusinessDto.telephone,
      billing: createBusinessDto.billing,
    })

    return this.businessRepository.save(newBusiness)
  }

    //PATCH
    async patch(id: number, patchBusinessDto: PatchBusinessDto): Promise<Business> {
      await this.businessRepository.update(id, patchBusinessDto);
      return this.businessRepository.findOne({where: {id}})
    }
  
    //PUT
    async update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<Business> {
      await this.businessRepository.update(id, updateBusinessDto);
      return this.businessRepository.findOne({where: {id}})
    }

  async remove(id: number): Promise<void> {
    await this.businessRepository.delete({id});
  }
}