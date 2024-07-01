import { GerenteConta } from "./GerenteConta";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { TipoContaEnum } from "../enuns/tipoContaEnum";
import { StatusEnum } from "../enuns/StatusEnum";

export class ContaBanco {
  id: string;
  cliente: PessoaFisica | PessoaJuridica;
  agencia: string;
  contaNumero: string;
  tipo: TipoContaEnum;
  status: StatusEnum;
  cestaTarifa: string;
  saldo: number;
  chequeEspecial?: number;
  gerenteConta: GerenteConta;

  private constructor(
    id: string,
    cliente: PessoaFisica | PessoaJuridica,
    agencia: string,
    contaNumero: string,
    tipo: TipoContaEnum,
    cestaTarifa: string,
    saldo: number,
    gerenteConta: GerenteConta
  ) {
    if (tipo === TipoContaEnum.Corrente && saldo < 500.0) {
      throw new Error(
        "Para abrir uma conta com tipo Corrente é necessário possuir saldo minimo de R$ 500.00"
      );
    }

    this.id = id;
    this.cliente = cliente;
    this.agencia = agencia;
    this.contaNumero = contaNumero;
    this.tipo = tipo;
    this.status = StatusEnum.Ativa;
    this.cestaTarifa = cestaTarifa;
    this.saldo = saldo;
    this.gerenteConta = gerenteConta;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
    }

    if (this.saldo < valor) {
      console.log("Saldo insuficiente.");
    }

    this.saldo -= valor;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
    }

    this.saldo += valor;
    console.log(`Saldo atualizado para R$ ${this.saldo}`);
  }

  private encerrarConta(): void {
    if (this.status === StatusEnum.Encerrada) {
      console.log("A conta já está encerrada.");
    } else {
      this.status = StatusEnum.Encerrada;
      console.log("Conta encerrada.");
    }
  }

  private alterarTipoConta(novoTipo: TipoContaEnum): void {
    if (this.tipo != novoTipo) {
      this.tipo = novoTipo;
    }
    console.log(`Tipo de conta alterado para ${novoTipo}.`);
  }

  static criarConta(
    id: string,
    cliente: PessoaFisica | PessoaJuridica,
    agencia: string,
    contaNumero: string,
    tipo: TipoContaEnum,
    cestaTarifa: string,
    saldo: number,
    gerenteConta: GerenteConta
  ): ContaBanco {
    return new ContaBanco(
      id,
      cliente,
      agencia,
      contaNumero,
      tipo,
      cestaTarifa,
      saldo,
      gerenteConta
    );
  }

  getEncerrarConta(): () => void {
    return this.encerrarConta.bind(this);
  }

  getAlterarTipoConta(): (novoTipo: TipoContaEnum) => void {
    return this.alterarTipoConta.bind(this);
  }
}
