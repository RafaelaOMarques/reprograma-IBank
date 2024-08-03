import { Address } from "src/_domain/entities/address.entity";
import { ManagerEnum } from "src/_domain/shared/enuns/ManagerEnum";
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
