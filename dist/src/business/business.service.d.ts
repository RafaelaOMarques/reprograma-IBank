import { Business } from './entities/business.entity';
import { BusinessRepository } from './business.repository';
export declare class BusinessService {
    private readonly businessRepository;
    private businesses;
    constructor(businessRepository: BusinessRepository);
    listBusiness(): Promise<Business[]>;
    listBusinessById(id: string): Promise<Business>;
    newBusiness(name: string, cnpj: string, telephone: string, billing: number, zipCode?: string, complement?: string): Promise<Business>;
    updateBusiness(id: string, name: string, cnpj: string, telephone: string, billing: number, zipCode: string): Promise<Business | null>;
    remove(id: string): Promise<void>;
}
