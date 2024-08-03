import { ViaCEPAddress } from './via-cep.entity';
import { Address } from '../../../../domain/entities/address.entity';
export declare class ViaCepadapter {
    static convertViaCEPAddress(address: ViaCEPAddress): Address;
}
