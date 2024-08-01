import { Address } from 'src/address/address.entity';
export declare class PatchPersonDto {
    id: number;
    name: string;
    cpf: string;
    telephone: string;
    salary: number;
    address: Address;
    zipcode: string;
}
