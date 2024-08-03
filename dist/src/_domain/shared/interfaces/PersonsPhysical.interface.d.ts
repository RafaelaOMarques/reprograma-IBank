import { Persons } from "./Persons.interface";
export interface PersonsPhysical extends Persons {
    cpf: string;
    salary: number;
}
