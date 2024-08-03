import { Repository } from "typeorm";
import { Business } from "../entities/business.entity";
export declare class BusinessRepository {
    private readonly businessRepository;
    constructor(businessRepository: Repository<Business>);
    findAll(): Promise<Business[]>;
    findById(id: string): Promise<Business>;
    save(business: Business): Promise<Business>;
    delete(id: string): Promise<boolean>;
}
