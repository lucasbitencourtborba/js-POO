import { Conta } from "./Conta/Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente){
        super(cliente, 0, 100)
    }

    saque(valor) {
        const taxa = 1.01  
        return this._saque(valor, taxa)
    }
}