import { Address } from 'src/address/address.entity';
export declare class CreatePersonDto {
    id: string;
    name: string;
    cpf: string;
    telephone: string;
    salary: number;
    address: Address;
    zipCode?: string;
}
