import { ContaBanco } from "./ContaBanco";
import { GerenteEnum } from "../enuns/GerenteEnum";
import { Pessoa } from "./Pessoa";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { TipoContaEnum } from "../enuns/tipoContaEnum";
import { StatusEnum } from "../enuns/StatusEnum";

export class GerenteConta implements Pessoa {
  public contas: ContaBanco[] = [];

  nome: string;
  cpf?: string | undefined;
  cnpj?: string | undefined;
  endereco: string;
  telefone: string;
  renda?: number | undefined;
  faturamento?: number | undefined;
  tipoGerente: GerenteEnum;

  constructor(
    nome: string,
    cpf: string,
    endereco: string,
    telefone: string,
    tipoGerente: GerenteEnum
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.tipoGerente = tipoGerente;
  }

  criarConta(
    id: string,
    cliente: PessoaFisica | PessoaJuridica,
    agencia: string,
    contaNumero: string,
    tipo: TipoContaEnum,
    cestaTarifa: string,
    saldo: number
  ): ContaBanco {
    const conta = ContaBanco.criarConta(
      id,
      cliente,
      agencia,
      contaNumero,
      tipo,
      cestaTarifa,
      saldo,
      this
    );

    tipo === TipoContaEnum.Corrente ? (conta.chequeEspecial = 100.0) : 0.0;

    this.contas.push(conta);
    return conta;
  }

  encerrarConta(conta: ContaBanco): void {
    const encerrar = conta.getEncerrarConta();
    encerrar();
    this.contas = this.contas.filter(
      (contasAtivas) => contasAtivas.id !== conta.id
    );
  }

  alterarTipoConta(conta: ContaBanco, novoTipo: TipoContaEnum): void {
    const alterarTipo = conta.getAlterarTipoConta();
    alterarTipo(novoTipo);
  }
}
