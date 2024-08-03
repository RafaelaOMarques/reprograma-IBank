import { Address } from "src/_domain/entities/address.entity";
export declare class CreateBusinessDto {
    id: string;
    name: string;
    cnpj: string;
    telephone: string;
    billing: number;
    address: Address;
    zipCode?: string;
}
