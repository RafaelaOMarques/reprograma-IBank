import { Controller, Get, Post, Body, Patch, OnApplicationShutdown, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { BusinessService } from './business.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';


@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  findAll() {
    return this.businessService.listBusiness();
  }
    
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.listBusinessById(id);
  }

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    const { name, cnpj, telephone, billing, zipCode } = createBusinessDto;
    return this.businessService.newBusiness(name, cnpj, telephone, billing, zipCode);
  }
      
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
    try{
      return this.businessService.updateBusiness(
        id, 
        updateBusinessDto.name, 
        updateBusinessDto.cnpj, 
        updateBusinessDto.telephone, 
        updateBusinessDto.billing, 
        updateBusinessDto.zipCode, 
      );
    }catch(error){
      throw new BadRequestException({ error: error.message})
    }
  }
      
  // @Patch(':id')
  // modify(@Param('id') id: number, @Body() patchBusinessDto: PatchBusinessDto): Promise<Business> {
  //   return this.businessService.patch(id, patchBusinessDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(id);
  }
}

