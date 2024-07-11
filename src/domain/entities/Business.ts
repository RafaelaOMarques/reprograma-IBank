import { IPersons } from "../interfaces/IPersons";

export class Business implements IPersons {
  name: string;
  cnpj?: string | undefined;
  address: string;
  telephone: string;
  billing?: number | undefined;

  constructor(
    name: string,
    cnpj: string,
    address: string,
    telephone: string,
    billing: number,
  ) {
    this.name = name;
    this.cnpj = cnpj;
    this.address = address;
    this.telephone = telephone;
    this.billing = billing;
  }
}
