import { Repository } from "typeorm";
import { Manager } from "../entities/manager.entity";
export declare class ManagerRepository {
    private readonly managerRepository;
    constructor(managerRepository: Repository<Manager>);
    findAll(): Promise<Manager[]>;
    findById(id: string): Promise<Manager>;
    save(manager: Manager): Promise<Manager>;
    delete(id: string): Promise<boolean>;
}
