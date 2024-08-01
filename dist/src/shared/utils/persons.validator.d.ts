import { Persons } from "../interfaces/Persons.interface";
export declare class PersonValidator {
    static ERROR_CPF_ALREADY_IN_USE: string;
    static ERROR_CNPJ_ALREADY_IN_USE: string;
    static checkCpfAlreadyInUse(persons: Persons[], cpf: string): boolean;
    static verifyCpf(cpf: string): boolean;
    static checkCnpjAlreadyInUse(persons: Persons[], cnpj: string): boolean;
    static verifyCnpj(cnpj: string): boolean;
}
