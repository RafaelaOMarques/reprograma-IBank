import { ManagerEnum } from "../shared/enuns/ManagerEnum";
import { PersonsPhysical } from "../shared/interfaces/PersonsPhysical.interface";
import { Address } from "src/_domain/entities/address.entity";
export declare class Manager implements PersonsPhysical {
    id: string;
    name: string;
    cpf: string;
    address: Address;
    telephone: string;
    salary: number;
    managerType: ManagerEnum;
    constructor(name: string, cpf: string, telephone: string, salary: number, managerType: ManagerEnum, address?: Address, id?: string);
}
