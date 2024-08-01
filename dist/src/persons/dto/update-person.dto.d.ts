import { Address } from 'src/address/address.entity';
export declare class UpdatePersonDto {
    id: number;
    name: string;
    cpf: string;
    address: Address;
    zipcode?: string;
    telephone: string;
    salary: number;
}
