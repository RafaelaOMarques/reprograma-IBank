import { Address } from "src/address/address.entity";
import { Persons } from "../../shared/interfaces/Persons.interface";
export declare class Business implements Persons {
    id: string;
    name: string;
    cnpj: string;
    address: Address;
    telephone: string;
    billing: number;
    constructor(name: string, cnpj: string, telephone: string, billing: number, id?: string);
}
