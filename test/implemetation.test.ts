// import { ManagerAccount } from "../src/manager/entities/managerAccount.entity";
// import { ManagerEnum } from "../src/shared/enuns/ManagerEnum";
// import { Person } from "../src/persons/entities/person.entity";
// import { Business } from "../src/persons/entities/business.entity";
// import { TypeAccountEnum } from "../src/shared/enuns/TypeAccountEnum";
// import { StatusEnum } from "../src/shared/enuns/StatusEnum";

// const gerentePF = new ManagerAccount(
//   "Rafaela Marques",
//   "022.995.483-01",
//   "Aracaju/SE",
//   "79998810179",
//   ManagerEnum.PF,
// );

// const gerentePJ = new ManagerAccount(
//   "Maria Oliveira",
//   "312.995.483-01",
//   "Aracaju/SE",
//   "7932451001",
//   ManagerEnum.PJ,
// );

// const cliente1 = new Person(
//   "Mariana",
//   "123.543.999-00",
//   "Rua das flores, 32 - Centro, Aracaju - SE",
//   "79999238772",
//   2300,
// );

// const cliente2 = new Business(
//   "Reprograma",
//   "01.234.987/0001-01",
//   "Av.Paulista, 16 - Centro, São Paulo - SP",
//   "1143250193",
//   50000.0,
// );

// const cliente3 = new Person(
//   "Aparecida Souza",
//   "555.543.786-00",
//   "Rua Amado - Centro, Aracaju - SE",
//   "7932414141",
//   10000,
// );

// console.log(
//   "------------------Consultando Clientes e Gerentes---------------------",
// );

// console.log(cliente1);
// console.log(cliente2);
// console.log(gerentePF);
// console.log(gerentePJ);

// console.log("-------------------Criando Conta-------------------");
// const contaCliente1 = gerentePF.criarConta(
//   "0001",
//   cliente1,
//   "1234-x",
//   "98.872-1",
//   TypeAccountEnum.Poupanca,
//   "basico",
//   0.0,
// );

// const contaCliente3 = gerentePF.criarConta(
//   "0001",
//   cliente3,
//   "1234-x",
//   "98.872-1",
//   TypeAccountEnum.Corrente,
//   "basico",
//   2000.0,
// );

// console.log(
//   "----------------Consultando Contas Clientes e Gerente---------------------",
// );

// console.log(contaCliente1);
// console.log(contaCliente3);
// console.log(gerentePF);

// console.log(
//   "-------------------Consultando Lista de Contas-------------------",
// );
// console.log(gerentePF.accountsList);

// console.log("---------------Alterando Tipo Conta--------------------");
// console.log("De Poupança para Salário");
// gerentePF.alterTypeAccount(contaCliente1, TypeAccountEnum.Salario);
// console.log(contaCliente1);

// console.log("De Corrente para Poupança");
// gerentePF.alterTypeAccount(contaCliente3, TypeAccountEnum.Poupanca);
// console.log(contaCliente3);

// console.log("--------------Encerrando Conta--------------------");
// gerentePF.closeAccount(contaCliente1);
// console.log(contaCliente1);
// gerentePF.closeAccount(contaCliente1);
// console.log(contaCliente1);
