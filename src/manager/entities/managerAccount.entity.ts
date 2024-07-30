import { Account } from "../../account/entities/account.entity";
import { ManagerEnum } from "../../shared/enuns/ManagerEnum";
import { Persons } from "../../persons/interfaces/Persons.interface";
import { Person } from "../../persons/entities/person.entity";
import { TypeAccountEnum } from "../../shared/enuns/TypeAccountEnum";
import { StatusEnum } from "../../shared/enuns/StatusEnum";
import { Business } from "src/business/entities/business.entity";

export class ManagerAccount implements Persons {
  public accountsList: Account[] = [];

  name: string;
  cpf: string;
  address: string;
  telephone: string;
  managerType: ManagerEnum;

  constructor(
    name: string,
    cpf: string,
    address: string,
    telephone: string,
    managerType: ManagerEnum,
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
    balance: number,
  ): Account {
    const account = Account.newAccount(
      id,
      client,
      agency,
      accountNumber,
      type,
      tariffs,
      balance,
      this,
    );

    type === TypeAccountEnum.Corrente ? (account.specialLimit = 100.0) : 0.0;

    this.accountsList.push(account);
    return account;
  }

  closeAccount(account: Account): void {
    const close = account.putCloseAccount();
    close();
    this.accountsList = this.accountsList.filter(
      (accountsActive) => accountsActive.id !== account.id,
    );
  }

  alterTypeAccount(account: Account, newAccount: TypeAccountEnum): void {
    const alterType = account.putTypeAccountEnum();
    alterType(newAccount);
  }
}
