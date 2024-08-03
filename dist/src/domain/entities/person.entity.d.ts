import { PersonsPhysical } from "../shared/interfaces/PersonsPhysical.interface";
import { Address } from "src/domain/entities/address.entity";
export declare class Person implements PersonsPhysical {
    id: string;
    name: string;
    cpf: string;
    address: Address;
    telephone: string;
    salary: number;
    constructor(name: string, cpf: string, telephone: string, salary: number, id?: string);
}
