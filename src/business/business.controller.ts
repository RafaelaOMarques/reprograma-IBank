import { Controller, Get, Post, Body, Patch, OnApplicationShutdown, Param, Delete, Put } from '@nestjs/common';
import { BusinessService } from './business.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { Business } from './entities/business.entity';
import { PatchBusinessDto } from './dto/patch-business.dto';


@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  findAll() {
    return this.businessService.findAll();
  }
    
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.businessService.findOne(id);
  }

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessService.create(createBusinessDto);
  }
      
  @Put(':id')
  update(@Param('id') id: number, @Body() updateBusinessDto: UpdateBusinessDto): Promise<Business>  {
    return this.businessService.update(id, updateBusinessDto);
  }
      
  @Patch(':id')
  modify(@Param('id') id: number, @Body() patchBusinessDto: PatchBusinessDto): Promise<Business> {
    return this.businessService.patch(id, patchBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.businessService.remove(id);
  }
}

