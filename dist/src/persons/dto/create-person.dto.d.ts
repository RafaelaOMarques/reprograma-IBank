import { Address } from 'src/address/address.entity';
export declare class CreatePersonDto {
    id: string;
    name: string;
    cpf: string;
    address: Address;
    telephone: string;
    salary: number;
    zipCode?: string;
}
