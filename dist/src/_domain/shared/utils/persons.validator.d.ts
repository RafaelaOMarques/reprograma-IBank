import { PersonsPhysical } from "../interfaces/PersonsPhysical.interface";
import { PersonsLegal } from "../interfaces/PersonsLegal.interface";
export declare class PersonValidator {
    static ERROR_CPF_ALREADY_IN_USE: string;
    static ERROR_CNPJ_ALREADY_IN_USE: string;
    static checkCpfAlreadyInUse(personsPhysical: PersonsPhysical[], cpf: string): boolean;
    static verifyCpf(cpf: string): boolean;
    static checkCnpjAlreadyInUse(personsLegal: PersonsLegal[], cnpj: string): boolean;
    static verifyCnpj(cnpj: string): boolean;
}
