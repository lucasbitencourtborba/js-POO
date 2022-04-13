import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial);
        ContaCorrente.numeroDeContas += 1;
    };

    saque(valor) {
        let taxa = 1.1;
        return this._saque(valor, taxa);
    };
};