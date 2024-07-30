import { BusinessService } from './business.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { Business } from './entities/business.entity';
import { PatchBusinessDto } from './dto/patch-business.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    findAll(): Promise<Business[]>;
    findOne(id: number): Promise<Business>;
    create(createBusinessDto: CreateBusinessDto): Promise<Business>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<Business>;
    modify(id: number, patchBusinessDto: PatchBusinessDto): Promise<Business>;
    remove(id: number): Promise<void>;
}
