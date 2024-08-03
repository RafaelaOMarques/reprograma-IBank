import { BusinessService } from '../../_application/services/business.service';
import { UpdateBusinessDto } from '../../_application/dto/update-business.dto';
import { CreateBusinessDto } from '../../_application/dto/create-business.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    findAll(): Promise<import("../../_domain/entities/business.entity").Business[]>;
    findOne(id: string): Promise<import("../../_domain/entities/business.entity").Business>;
    create(createBusinessDto: CreateBusinessDto): Promise<import("../../_domain/entities/business.entity").Business>;
    update(id: string, updateBusinessDto: UpdateBusinessDto): Promise<import("../../_domain/entities/business.entity").Business>;
    remove(id: string): Promise<void>;
}
