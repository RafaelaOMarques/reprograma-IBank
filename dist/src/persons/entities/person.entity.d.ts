import { Persons } from "../../shared/interfaces/Persons.interface";
import { Address } from "src/address/address.entity";
export declare class Person implements Persons {
    id: string;
    name: string;
    cpf: string;
    address: Address;
    telephone: string;
    salary: number;
    constructor(name: string, cpf: string, telephone: string, salary: number, id?: string);
}
