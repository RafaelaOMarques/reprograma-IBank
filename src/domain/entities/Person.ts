import { IPersons } from "../interfaces/IPersons";

export class Person implements IPersons {
  name: string;
  cpf?: string | undefined;
  address: string;
  telephone: string;
  billing?: number | undefined;

  constructor(
    name: string,
    cpf: string,
    address: string,
    telephone: string,
    salary: number,
  ) {
    this.name = name;
    this.cpf = cpf;
    this.address = address;
    this.telephone = telephone;
    this.billing = salary;
  }
}
