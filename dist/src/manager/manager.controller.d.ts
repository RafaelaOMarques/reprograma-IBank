import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
export declare class ManagerController {
    private readonly managerService;
    constructor(managerService: ManagerService);
    create(createManagerDto: CreateManagerDto): string;
    findOne(id: string): string;
    update(id: string, updateManagerDto: UpdateManagerDto): string;
    remove(id: string): string;
    getManager(): string;
}
