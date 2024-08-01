import { Persons } from "../interfaces/Persons.interface";

export class PersonValidator {
  // public static ERROR_EMAIL_INVALID = 'Invalid email';
  // public static ERROR_EMAIL_ALREADY_IN_USE = 'Email already in use';
  public static ERROR_CPF_ALREADY_IN_USE = 'CPF already in use';
  public static ERROR_CNPJ_ALREADY_IN_USE = 'CNPJ already in use';

  // TODO: Implementação de email no cadastro a ser realizada futuramente
  // static verifyEmail(email: string): void {
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     throw new Error(this.ERROR_EMAIL_INVALID);
  //   }
  // }

  static checkCpfAlreadyInUse(persons: Persons[], cpf: string): boolean {
    if (persons.some((person) => person.cpf === cpf)) {
      throw new Error(this.ERROR_CPF_ALREADY_IN_USE);
    }

    return true;
  }

  static verifyCpf(cpf: string): boolean {
    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)) {
      throw new Error('Invalid CPF');
    }

    const cpfWithoutDots = cpf.replace(/[^\d]+/g, '');

    if (cpfWithoutDots.length !== 11) {
      throw new Error('Invalid CPF');
    }

    // Elimina CPFs conhecidos que são inválidos
    if (
      cpfWithoutDots === '00000000000' ||
      cpfWithoutDots === '11111111111' ||
      cpfWithoutDots === '22222222222' ||
      cpfWithoutDots === '33333333333' ||
      cpfWithoutDots === '44444444444' ||
      cpfWithoutDots === '55555555555' ||
      cpfWithoutDots === '66666666666' ||
      cpfWithoutDots === '77777777777' ||
      cpfWithoutDots === '88888888888' ||
      cpfWithoutDots === '99999999999'
    ) {
      throw new Error('Invalid CPF');
    }

    let sum = 0;
    let remainder: number;

    // Calcula o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpfWithoutDots.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpfWithoutDots.substring(9, 10))) {
      throw new Error('Invalid CPF');
    }

    sum = 0;

    // Calcula o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpfWithoutDots.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpfWithoutDots.substring(10, 11))) {
      throw new Error('Invalid CPF');
    }

    return true;
  }

  static checkCnpjAlreadyInUse(persons: Persons[], cnpj: string): boolean {
    if (persons.some((person) => person.cnpj === cnpj)) {
      throw new Error(this.ERROR_CNPJ_ALREADY_IN_USE);
    }

    return true;
  }

  static verifyCnpj(cnpj: string): boolean {
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      throw new Error('Invalid CNPJ');
    }

    const cnpjWithoutDots = cnpj.replace(/[^\d]+/g, '');

    if (cnpjWithoutDots.length !== 14) {
      throw new Error('Invalid CNPJ');
    }

    // Elimina CNPJs conhecidos que são inválidos
    if (
      cnpjWithoutDots === '00000000000000' ||
      cnpjWithoutDots === '11111111111111' ||
      cnpjWithoutDots === '22222222222222' ||
      cnpjWithoutDots === '33333333333333' ||
      cnpjWithoutDots === '44444444444444' ||
      cnpjWithoutDots === '55555555555555' ||
      cnpjWithoutDots === '66666666666666' ||
      cnpjWithoutDots === '77777777777777' ||
      cnpjWithoutDots === '88888888888888' ||
      cnpjWithoutDots === '99999999999999'
    ) {
      throw new Error('Invalid CNPJ');
    }

    return true;
  }
}
