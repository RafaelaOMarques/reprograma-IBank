import { Address } from "src/domain/entities/address.entity";
import { PersonsLegal } from "src/domain/shared/interfaces/PersonsLegal.interface";
export declare class Business implements PersonsLegal {
    id: string;
    name: string;
    cnpj: string;
    address: Address;
    telephone: string;
    billing: number;
    constructor(name: string, cnpj: string, telephone: string, billing: number, id?: string);
}
