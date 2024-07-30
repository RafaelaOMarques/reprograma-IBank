import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
export declare class ManagerService {
    create(createManagerDto: CreateManagerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateManagerDto: UpdateManagerDto): string;
    remove(id: number): string;
}
