import { Address } from "src/domain/entities/address.entity";
import { ManagerEnum } from "src/domain/shared/enuns/ManagerEnum";
export declare class CreateManagerDto {
    id: string;
    name: string;
    cpf: string;
    telephone: string;
    salary: number;
    address: Address;
    zipCode?: string;
    managerType: ManagerEnum;
}
