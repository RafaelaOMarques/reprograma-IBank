import { ManagerAccount } from "./ManagerAccount";
import { Person } from "./Person";
import { Business } from "./Business";
import { TypeAccountEnum } from "../enuns/TypeAccountEnum";
import { StatusEnum } from "../enuns/StatusEnum";

export class BankAccount {
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
    accountManager: ManagerAccount
  ) {
    if (type === TypeAccountEnum.Corrente && balance < 500.0) {
      throw new Error(
        "Para abrir uma conta com tipo Corrente é necessário possuir saldo minimo de R$ 500.00"
      );
    }

    this.id = id;
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
    accountManager: ManagerAccount
  ): BankAccount {
    return new BankAccount(
      id,
      client,
      agency,
      accountNumber,
      type,
      tariffs,
      balance,
      accountManager
    );
  }

  putCloseAccount(): () => void {
    return this.closeAccount.bind(this);
  }

  putTypeAccountEnum(): (newType: TypeAccountEnum) => void {
    return this.alterTypeAccount.bind(this);
  }
}
