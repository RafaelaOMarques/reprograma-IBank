import { Injectable } from '@nestjs/common';
import { Manager } from '../../domain/entities/manager.entity';
import { ManagerRepository } from '../../domain/repositories/manager.repository';
import { ManagerEnum } from 'src/domain/shared/enuns/ManagerEnum';
import { PersonValidator } from 'src/domain/shared/utils/persons.validator';
import { Address } from 'src/domain/entities/address.entity';
import { ViaCepService } from 'src/infrastructure/external/third-party/via-cep/via-cep.service';

@Injectable()
export class ManagerService {
  private managers: Manager[] = [];

  constructor(
    private readonly managerRepository: ManagerRepository
  ){}

  async listManagers(): Promise<Manager[]>{
    return await  this.managerRepository.findAll()
  }

  async listManagerById(id: string): Promise<Manager>{
    const manager = await  this.managerRepository.findById(id)
    if(!manager){
      throw new Error('Person not found')
    }
    return manager
  }

  async newManager(
    name: string,
    cpf: string,
    telephone: string,
    salary: number,
    managerType: ManagerEnum,
    zipCode?: string,
    complement?: string,
    id?: string
  ): Promise<Manager>{

    PersonValidator.verifyCpf(cpf);
    PersonValidator.checkCpfAlreadyInUse(this.managers, cpf);

    let address: Address = null;
    if(zipCode){
      address = await ViaCepService.getAddress(zipCode);
      if(complement){
        address.complement = complement;
      }
    }

    const manager = new Manager(name, cpf, telephone, salary, managerType);
    manager.address = address;
    this.managers.push(manager);
    return await this.managerRepository.save(manager)
  };

  async updateManager(
    id: string,
    name: string,
    cpf: string,
    telephone: string,
    salary: number,
    managerType: ManagerEnum,
    zipCode?: string,
    complement?: string,
  ): Promise<Manager | null > {

    const manager  = await this.listManagerById(id);

    if (!manager) {
      throw new Error('Manager not found');
    }
    
    if (manager){
      manager.name = name;
      manager.cpf = cpf;
      manager.telephone = telephone;
      manager.salary = salary;
      manager.managerType = managerType;

      if (zipCode) {
        manager.address = await ViaCepService.getAddress(zipCode);
      }

      return await this.managerRepository.save(manager)
    }
    return null;
  }

  async removeManager(id:string): Promise<void>{
    await this.managerRepository.delete(id)
  }


}
