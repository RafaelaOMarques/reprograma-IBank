import { Address } from "src/address/address.entity";
export declare class UpdateBusinessDto {
    id: string;
    name: string;
    cnpj: string;
    telephone: string;
    billing: number;
    address: Address;
    zipCode?: string;
}
