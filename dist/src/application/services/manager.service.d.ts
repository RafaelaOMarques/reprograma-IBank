import { Manager } from '../../domain/entities/manager.entity';
import { ManagerRepository } from '../../domain/repositories/manager.repository';
import { ManagerEnum } from 'src/domain/shared/enuns/ManagerEnum';
export declare class ManagerService {
    private readonly managerRepository;
    private managers;
    constructor(managerRepository: ManagerRepository);
    listManagers(): Promise<Manager[]>;
    listManagerById(id: string): Promise<Manager>;
    newManager(name: string, cpf: string, telephone: string, salary: number, managerType: ManagerEnum, zipCode?: string, complement?: string, id?: string): Promise<Manager>;
    updateManager(id: string, name: string, cpf: string, telephone: string, salary: number, managerType: ManagerEnum, zipCode?: string, complement?: string): Promise<Manager | null>;
    removeManager(id: string): Promise<void>;
}
