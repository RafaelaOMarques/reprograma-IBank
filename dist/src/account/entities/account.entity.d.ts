import { Manager } from "../../_domain/entities/manager.entity";
import { Person } from "../../_domain/entities/person.entity";
import { TypeAccountEnum } from "../../_domain/shared/enuns/TypeAccountEnum";
import { StatusEnum } from "../../_domain/shared/enuns/StatusEnum";
import { Business } from 'src/_domain/entities/business.entity';
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
