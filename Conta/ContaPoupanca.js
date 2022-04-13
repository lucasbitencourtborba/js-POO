import { Conta } from "./Conta/Conta.js"

export class ContaPoupanca extends Conta {
    static numeroDeContas = 0
    constructor(cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial);
        ContaPoupanca.numeroDeContas += 1;
    }

    saque(valor){
        const taxa = 1.035;
        return this._saque(valor, taxa);
    }
}