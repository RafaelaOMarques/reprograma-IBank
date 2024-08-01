import { User } from './user.entity';
export declare class UserValidator {
    static ERROR_EMAIL_INVALID: string;
    static ERROR_PASSWORD_INVALID: string;
    static ERROR_EMAIL_ALREADY_IN_USE: string;
    static ERROR_CPF_ALREADY_IN_USE: string;
    static verifyEmail(email: string): void;
    static verifyPassword(password: string): boolean;
    static checkEmailAlreadyInUse(users: User[], email: string): boolean;
    static checkCpfAlreadyInUse(users: User[], cpf: string): boolean;
    static verifyCpf(cpf: string): boolean;
}
