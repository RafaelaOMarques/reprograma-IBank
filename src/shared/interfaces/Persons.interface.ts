import { Address } from "src/address/address.entity";

export interface Persons {
  name: string;
  cpf?: string;
  cnpj?: string;
  address: Address;
  telephone: string;
  billing?: number;
  salary?: number;
}
