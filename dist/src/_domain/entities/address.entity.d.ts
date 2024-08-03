export declare class Address {
    id: string;
    street: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    constructor(zipCode: string, street: string, neighborhood: string, city: string, state: string, complement?: string, id?: string);
}
