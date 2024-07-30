"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerAccount = void 0;
const account_entity_1 = require("../../account/entities/account.entity");
const TypeAccountEnum_1 = require("../../shared/enuns/TypeAccountEnum");
class ManagerAccount {
    constructor(name, cpf, address, telephone, managerType) {
        this.accountsList = [];
        this.name = name;
        this.cpf = cpf;
        this.address = address;
        this.telephone = telephone;
        this.managerType = managerType;
    }
    criarConta(id, client, agency, accountNumber, type, tariffs, balance) {
        const account = account_entity_1.Account.newAccount(id, client, agency, accountNumber, type, tariffs, balance, this);
        type === TypeAccountEnum_1.TypeAccountEnum.Corrente ? (account.specialLimit = 100.0) : 0.0;
        this.accountsList.push(account);
        return account;
    }
    closeAccount(account) {
        const close = account.putCloseAccount();
        close();
        this.accountsList = this.accountsList.filter((accountsActive) => accountsActive.id !== account.id);
    }
    alterTypeAccount(account, newAccount) {
        const alterType = account.putTypeAccountEnum();
        alterType(newAccount);
    }
}
exports.ManagerAccount = ManagerAccount;
//# sourceMappingURL=managerAccount.entity.js.map