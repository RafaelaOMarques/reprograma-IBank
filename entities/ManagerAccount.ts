import { BankAccount } from "./BankAccount";
import { ManagerEnum } from "../enuns/ManagerEnum";
import { Persons } from "./Persons";
import { Person } from "./Person";
import { Business } from "./Business";
import { TypeAccountEnum } from "../enuns/TypeAccountEnum";
import { StatusEnum } from "../enuns/StatusEnum";

export class ManagerAccount implements Persons {
  public accountsList: BankAccount[] = [];

  name: string;
  cpf?: string | undefined;
  cnpj?: string | undefined;
  address: string;
  telephone: string;
  salary?: number | undefined;
  billing?: number | undefined;
  managerType: ManagerEnum;

  constructor(
    name: string,
    cpf: string,
    address: string,
    telephone: string,
    managerType: ManagerEnum
  ) {
    this.name = name;
    this.cpf = cpf;
    this.address = address;
    this.telephone = telephone;
    this.managerType = managerType;
  }

  criarConta(
    id: string,
    client: Person | Business,
    agency: string,
    accountNumber: string,
    type: TypeAccountEnum,
    tariffs: string,
    balance: number
  ): BankAccount {
    const account = BankAccount.newAccount(
      id,
      client,
      agency,
      accountNumber,
      type,
      tariffs,
      balance,
      this
    );

    type === TypeAccountEnum.Corrente ? (account.specialLimit = 100.0) : 0.0;

    this.accountsList.push(account);
    return account;
  }

  closeAccount(account: BankAccount): void {
    const close = account.putCloseAccount();
    close();
    this.accountsList = this.accountsList.filter(
      (accountsActive) => accountsActive.id !== account.id
    );
  }

  alterTypeAccount(account: BankAccount, newAccount: TypeAccountEnum): void {
    const alterType = account.putTypeAccountEnum();
    alterType(newAccount);
  }
}
