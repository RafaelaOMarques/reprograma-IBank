import { Account } from "../../account/entities/account.entity";
import { ManagerEnum } from "../../shared/enuns/ManagerEnum";
import { Persons } from "../../persons/interfaces/Persons.interface";
import { Person } from "../../persons/entities/person.entity";
import { TypeAccountEnum } from "../../shared/enuns/TypeAccountEnum";
import { Business } from "src/business/entities/business.entity";
export declare class ManagerAccount implements Persons {
    accountsList: Account[];
    name: string;
    cpf: string;
    address: string;
    telephone: string;
    managerType: ManagerEnum;
    constructor(name: string, cpf: string, address: string, telephone: string, managerType: ManagerEnum);
    criarConta(id: string, client: Person | Business, agency: string, accountNumber: string, type: TypeAccountEnum, tariffs: string, balance: number): Account;
    closeAccount(account: Account): void;
    alterTypeAccount(account: Account, newAccount: TypeAccountEnum): void;
}
