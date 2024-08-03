import { Business } from '../../_domain/entities/business.entity';
import { BusinessRepository } from '../../_domain/repositories/business.repository';
export declare class BusinessService {
    private readonly businessRepository;
    private businesses;
    constructor(businessRepository: BusinessRepository);
    listBusiness(): Promise<Business[]>;
    listBusinessById(id: string): Promise<Business>;
    newBusiness(name: string, cnpj: string, telephone: string, billing: number, zipCode?: string, complement?: string): Promise<Business>;
    updateBusiness(id: string, name: string, cnpj: string, telephone: string, billing: number, zipCode: string): Promise<Business | null>;
    removeBusiness(id: string): Promise<void>;
}
