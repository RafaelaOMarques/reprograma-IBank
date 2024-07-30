import { v4 as uuidv4 } from 'uuid';
import { ManagerAccount } from "../../manager/entities/managerAccount.entity";
import { Person } from "../../persons/entities/person.entity";
import { TypeAccountEnum } from "../../shared/enuns/TypeAccountEnum";
import { StatusEnum } from "../../shared/enuns/StatusEnum";
import { VALUE_ACCOUNT } from 'src/shared/constants/constants';
import { Business } from 'src/business/entities/business.entity';

export class Account {
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

  private constructor(
    id: string,
    client: Person | Business,
    agency: string,
    accountNumber: string,
    type: TypeAccountEnum,
    tariffs: string,
    balance: number,
    accountManager: ManagerAccount,
  ) {
    if (type === TypeAccountEnum.Corrente && balance <  VALUE_ACCOUNT.MIN_BALANCE) {
      throw new Error(
        "Para abrir uma conta com tipo Corrente é necessário possuir saldo minimo de R$ 500.00",
      );
    }

    this.id = uuidv4();
    this.client = client;
    this.agency = agency;
    this.accountNumber = accountNumber;
    this.type = type;
    this.status = StatusEnum.Ativa;
    this.tariffs = tariffs;
    this.balance = balance;
    this.accountManager = accountManager;
  }

  take(value: number): void {
    if (value <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
    }

    if (this.balance < value) {
      console.log("Saldo insuficiente.");
    }

    this.balance -= value;
  }

  deposit(value: number): void {
    if (value <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
    }

    this.balance += value;
    console.log(`Saldo atualizado para R$ ${this.balance}`);
  }

  private closeAccount(): void {
    if (this.status === StatusEnum.Encerrada) {
      console.log("A conta já está encerrada.");
    } else {
      this.status = StatusEnum.Encerrada;
      console.log("Conta encerrada.");
    }
  }

  private alterTypeAccount(newType: TypeAccountEnum): void {
    if (this.type != newType) {
      this.type = newType;
    }
    console.log(`Tipo de conta alterado para ${newType}.`);
  }

  static newAccount(
    id: string,
    client: Person | Business,
    agency: string,
    accountNumber: string,
    type: TypeAccountEnum,
    tariffs: string,
    balance: number,
    accountManager: ManagerAccount,
  ): Account {
    return new Account(
      id,
      client,
      agency,
      accountNumber,
      type,
      tariffs,
      balance,
      accountManager,
    );
  }

  putCloseAccount(): () => void {
    return this.closeAccount.bind(this);
  }

  putTypeAccountEnum(): (newType: TypeAccountEnum) => void {
    return this.alterTypeAccount.bind(this);
  }
}
