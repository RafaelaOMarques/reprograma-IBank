import { GerenteConta } from "../entities/GerenteConta";
import { GerenteEnum } from "../enuns/GerenteEnum";
import { PessoaFisica } from "../entities/PessoaFisica";
import { PessoaJuridica } from "../entities/PessoaJuridica";
import { TipoContaEnum } from "../enuns/tipoContaEnum";
import { StatusEnum } from "../enuns/StatusEnum";

// Antes da implementação do gerente a ContaBanco sem acesso privado
// const contaBancariaCliente1 = new ContaBanco(
//   "0001",
//   cliente1,
//   "1234-x",
//   "98.872-1",
//   TipoContaEnum.Poupanca,
//   "basico",
//   0.0,
//   gerentePF
// );
// contaBancariaCliente1.depositar(1000.0);

// const contaBancariaCliente2 = new ContaBanco(
//   "0002",
//   cliente2,
//   "1234-x",
//   "200.654-9",
//   TipoContaEnum.Corrente,
//   "empresarial",
//   1500.0,
//   gerentePJ
// );
// console.log(contaBancariaCliente1.saldo);
// console.log(contaBancariaCliente2.saldo);
// contaBancariaCliente1.sacar(3000);
// contaBancariaCliente2.sacar(1500);
// contaBancariaCliente1.depositar(500000);

const gerentePF = new GerenteConta(
  "Rafaela Marques",
  "022.995.483-01",
  "Aracaju/SE",
  "79998810179",
  GerenteEnum.PF
);

const gerentePJ = new GerenteConta(
  "Maria Oliveira",
  "312.995.483-01",
  "Aracaju/SE",
  "7932451001",
  GerenteEnum.PJ
);

const cliente1 = new PessoaFisica(
  "Mariana",
  "123.543.999-00",
  "Rua das flores, 32 - Centro, Aracaju - SE",
  "79999238772",
  2300
);

const cliente2 = new PessoaJuridica(
  "Reprograma",
  "01.234.987/0001-01",
  "Av.Paulista, 16 - Centro, São Paulo - SP",
  "1143250193",
  50000.0
);

const cliente3 = new PessoaFisica(
  "Aparecida Souza",
  "555.543.786-00",
  "Rua Amado - Centro, Aracaju - SE",
  "7932414141",
  10000
);

console.log(
  "------------------Consultando Clientes e Gerentes---------------------"
);

console.log(cliente1);
console.log(cliente2);
console.log(gerentePF);
console.log(gerentePJ);

console.log("-------------------Criando Conta-------------------");
const contaCliente1 = gerentePF.criarConta(
  "0001",
  cliente1,
  "1234-x",
  "98.872-1",
  TipoContaEnum.Poupanca,
  "basico",
  0.0
);

const contaCliente3 = gerentePF.criarConta(
  "0001",
  cliente3,
  "1234-x",
  "98.872-1",
  TipoContaEnum.Corrente,
  "basico",
  2000.0
);

console.log(
  "----------------Consultando Contas Clientes e Gerente---------------------"
);

console.log(contaCliente1);
console.log(contaCliente3);
console.log(gerentePF);

console.log(
  "-------------------Consultando Lista de Contas-------------------"
);
console.log(gerentePF.contas);

console.log("---------------Alterando Tipo Conta--------------------");
console.log("De Poupança para Salário");
gerentePF.alterarTipoConta(contaCliente1, TipoContaEnum.Salario);
console.log(contaCliente1);

console.log("De Corrente para Poupança");
gerentePF.alterarTipoConta(contaCliente3, TipoContaEnum.Poupanca);
console.log(contaCliente3);

console.log("--------------Encerrando Conta--------------------");
gerentePF.encerrarConta(contaCliente1);
console.log(contaCliente1);
gerentePF.encerrarConta(contaCliente1);
console.log(contaCliente1);
