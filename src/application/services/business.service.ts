import { Injectable } from '@nestjs/common';
import { Business } from '../../domain/entities/business.entity';
import { BusinessRepository } from '../../domain/repositories/business.repository';
import { PersonValidator } from 'src/domain/shared/utils/persons.validator';
import { Address } from 'src/domain/entities/address.entity';
import { ViaCepService } from 'src/infrastructure/external/third-party/via-cep/via-cep.service';


@Injectable()
export class BusinessService {
  private businesses: Business[] = []
  constructor( 
    private readonly businessRepository: BusinessRepository
  ){}

  async listBusiness(): Promise<Business[]> {
    return this.businessRepository.findAll();
  }

  async listBusinessById(id: string): Promise<Business> {
    return this.businessRepository.findById(id);
  }

  async newBusiness(
    name: string,
    cnpj: string,
    telephone: string,
    billing: number,
    zipCode?: string,
    complement?: string,
  ): Promise<Business> {

    PersonValidator.verifyCnpj(cnpj);
    PersonValidator.checkCnpjAlreadyInUse(this.businesses, cnpj);

    let address: Address = null;

    if (zipCode) {
      address = await ViaCepService.getAddress(zipCode);
      if(complement){
        address.complement = complement;
      }
    }

    const business = new Business(name, cnpj, telephone, billing);

    business.address = address;
    this.businesses.push(business);
    return await this.businessRepository.save(business);
  }

    //PUT
    async updateBusiness(
      id: string,
      name: string,
      cnpj: string,
      telephone: string,
      billing: number,
      zipCode: string,
    ): Promise<Business | null> {
      const business = await this.listBusinessById(id);

      if(!business) {
        throw new Error('Business not found');
      }

      if(business){
        business.name = name;
        business.cnpj = cnpj;
        business.telephone = telephone;
        business.billing = billing;

        if(zipCode){
          business.address = await ViaCepService.getAddress(zipCode);
        }

        return await this.businessRepository.save(business)
      }

      return null;
    }


  
  //PATCH
  // async patch(id: number, patchBusinessDto: PatchBusinessDto):     Promise<Business> {
  //   await this.businessRepository.update(id, patchBusinessDto);
  //   return this.businessRepository.findOne({where: {id}})
  // }
  
  //DELETE
  async removeBusiness(id: string): Promise<void> {
    await this.businessRepository.delete(id);
  }
}