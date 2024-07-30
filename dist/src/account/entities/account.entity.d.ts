import { ManagerAccount } from "../../manager/entities/managerAccount.entity";
import { Person } from "../../persons/entities/person.entity";
import { TypeAccountEnum } from "../../shared/enuns/TypeAccountEnum";
import { StatusEnum } from "../../shared/enuns/StatusEnum";
import { Business } from 'src/business/entities/business.entity';
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
    accountManager: ManagerAccount;
    private constructor();
    take(value: number): void;
    deposit(value: number): void;
    private closeAccount;
    private alterTypeAccount;
    static newAccount(id: string, client: Person | Business, agency: string, accountNumber: string, type: TypeAccountEnum, tariffs: string, balance: number, accountManager: ManagerAccount): Account;
    putCloseAccount(): () => void;
    putTypeAccountEnum(): (newType: TypeAccountEnum) => void;
}
