import { Manager } from '../../_domain/entities/manager.entity';
import { ManagerRepository } from '../../_domain/repositories/manager.repository';
import { ManagerEnum } from 'src/_domain/shared/enuns/ManagerEnum';
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
