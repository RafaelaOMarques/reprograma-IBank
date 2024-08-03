"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const uuid_1 = require("uuid");
const TypeAccountEnum_1 = require("../../_domain/shared/enuns/TypeAccountEnum");
const StatusEnum_1 = require("../../_domain/shared/enuns/StatusEnum");
const constants_1 = require("../../_domain/shared/constants/constants");
class Account {
    constructor(id, client, agency, accountNumber, type, tariffs, balance, accountManager) {
        if (type === TypeAccountEnum_1.TypeAccountEnum.Corrente && balance < constants_1.VALUE_ACCOUNT.MIN_BALANCE) {
            throw new Error("Para abrir uma conta com tipo Corrente é necessário possuir saldo minimo de R$ 500.00");
        }
        this.id = (0, uuid_1.v4)();
        this.client = client;
        this.agency = agency;
        this.accountNumber = accountNumber;
        this.type = type;
        this.status = StatusEnum_1.StatusEnum.Ativa;
        this.tariffs = tariffs;
        this.balance = balance;
        this.accountManager = accountManager;
    }
    take(value) {
        if (value <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
        }
        if (this.balance < value) {
            console.log("Saldo insuficiente.");
        }
        this.balance -= value;
    }
    deposit(value) {
        if (value <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
        }
        this.balance += value;
        console.log(`Saldo atualizado para R$ ${this.balance}`);
    }
    closeAccount() {
        if (this.status === StatusEnum_1.StatusEnum.Encerrada) {
            console.log("A conta já está encerrada.");
        }
        else {
            this.status = StatusEnum_1.StatusEnum.Encerrada;
            console.log("Conta encerrada.");
        }
    }
    alterTypeAccount(newType) {
        if (this.type != newType) {
            this.type = newType;
        }
        console.log(`Tipo de conta alterado para ${newType}.`);
    }
    static newAccount(id, client, agency, accountNumber, type, tariffs, balance, accountManager) {
        return new Account(id, client, agency, accountNumber, type, tariffs, balance, accountManager);
    }
    putCloseAccount() {
        return this.closeAccount.bind(this);
    }
    putTypeAccountEnum() {
        return this.alterTypeAccount.bind(this);
    }
}
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map