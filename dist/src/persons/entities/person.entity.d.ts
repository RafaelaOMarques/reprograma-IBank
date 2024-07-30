import { Persons } from "../interfaces/Persons.interface";
export declare class Person implements Persons {
    id: number;
    name: string;
    cpf: string;
    address: string;
    telephone: string;
    salary: number;
    constructor(id: number, name: string, cpf: string, address: string, telephone: string, salary: number);
}
