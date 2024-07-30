import { Persons } from "../../persons/interfaces/Persons.interface";
export declare class Business implements Persons {
    id: number;
    name: string;
    cnpj: string;
    address: string;
    telephone: string;
    billing: number;
}
