import { Manager } from "../../domain/entities/manager.entity";
import { Person } from "../../domain/entities/person.entity";
import { TypeAccountEnum } from "../../domain/shared/enuns/TypeAccountEnum";
import { StatusEnum } from "../../domain/shared/enuns/StatusEnum";
import { Business } from 'src/domain/entities/business.entity';
export declare class Account {
    id: string;
    client: Person | Business;
    agency: string;
    accountNumber: string;
    type: TypeAccountEnum;
    status: StatusEnum;
    tariffs: string;
    balance: number;
    specialLimit?: number;
    accountManager: Manager;
    private constructor();
    take(value: number): void;
    deposit(value: number): void;
    private closeAccount;
    private alterTypeAccount;
    static newAccount(id: string, client: Person | Business, agency: string, accountNumber: string, type: TypeAccountEnum, tariffs: string, balance: number, accountManager: Manager): Account;
    putCloseAccount(): () => void;
    putTypeAccountEnum(): (newType: TypeAccountEnum) => void;
}
