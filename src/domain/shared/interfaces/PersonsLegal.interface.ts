import { Persons } from "./Persons.interface";

export interface PersonsLegal extends Persons {
  cnpj: string;
  billing: number;
}
