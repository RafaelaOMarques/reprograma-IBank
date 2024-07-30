import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { PatchBusinessDto } from './dto/patch-business.dto';
export declare class BusinessService {
    private readonly businessRepository;
    constructor(businessRepository: Repository<Business>);
    findAll(): Promise<Business[]>;
    findOne(id: number): Promise<Business>;
    create(createBusinessDto: CreateBusinessDto): Promise<Business>;
    patch(id: number, patchBusinessDto: PatchBusinessDto): Promise<Business>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<Business>;
    remove(id: number): Promise<void>;
}
