import { Address } from "src/_domain/entities/address.entity";
export declare class UpdateBusinessDto {
    id: string;
    name: string;
    cnpj: string;
    telephone: string;
    billing: number;
    address: Address;
    zipCode?: string;
}
