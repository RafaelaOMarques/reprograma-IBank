import { ManagerService } from '../services/manager.service';
import { CreateManagerDto } from '../dto/create-manager.dto';
import { UpdateManagerDto } from '../dto/update-manager.dto';
import { Manager } from '../../_domain/entities/manager.entity';
export declare class ManagerController {
    private readonly managerService;
    constructor(managerService: ManagerService);
    listManagers(): Promise<Manager[]>;
    listManagerById(id: string): Promise<Manager>;
    create(createManagerDto: CreateManagerDto): Promise<Manager>;
    update(id: string, updateManagerDto: UpdateManagerDto): Promise<Manager>;
    remove(id: string): Promise<void>;
}
