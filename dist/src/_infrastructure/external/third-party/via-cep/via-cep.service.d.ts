import { Address } from 'src/_domain/entities/address.entity';
export declare class ViaCepService {
    static ERROR_CEP_NOT_FOUND: string;
    static ERROR_UNEXPECTED: string;
    static getAddress(zipCode: string): Promise<Address>;
}
