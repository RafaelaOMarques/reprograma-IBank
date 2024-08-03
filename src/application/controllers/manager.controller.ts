import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { ManagerService } from '../services/manager.service';
import { CreateManagerDto } from '../dto/create-manager.dto';
import { UpdateManagerDto } from '../dto/update-manager.dto';
import { Manager } from '../../_domain/entities/manager.entity';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Get()
  async listManagers(): Promise<Manager[]> {
    return await this.managerService.listManagers();
  }

  @Get(':id')
  async listManagerById(@Param('id') id: string): Promise<Manager> {
    return await this.managerService.listManagerById(id);
  }

  @Post()
  async create(@Body() createManagerDto: CreateManagerDto): Promise<Manager> {
    const {name, cpf, telephone, salary, zipCode, managerType} = createManagerDto;
    return this.managerService.newManager(name, cpf, telephone, salary, managerType, zipCode, )
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto){
    try{
      return this.managerService.updateManager(
        id, 
        updateManagerDto.name, 
        updateManagerDto.cpf, 
        updateManagerDto.telephone, 
        updateManagerDto.salary,
        updateManagerDto.managerType, 
        updateManagerDto.zipCode, 
      );
    }catch(error){
      throw new BadRequestException({ error: error.message})
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
  //   return this.managerService.update(+id, updateManagerDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerService.removeManager(id);
  }

}
