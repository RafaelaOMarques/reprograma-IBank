import { BusinessService } from './business.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    findAll(): Promise<import("./entities/business.entity").Business[]>;
    findOne(id: string): Promise<import("./entities/business.entity").Business>;
    create(createBusinessDto: CreateBusinessDto): Promise<import("./entities/business.entity").Business>;
    update(id: string, updateBusinessDto: UpdateBusinessDto): Promise<import("./entities/business.entity").Business>;
    remove(id: string): Promise<void>;
}
