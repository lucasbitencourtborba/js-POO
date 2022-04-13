import { Conta } from "./Conta/Conta.js";

class ContaEmpresarial extends Conta {
    constructor(cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial)
    }
    
    saque(valor){
        let taxa = 1.05
        return this._saque(valor, taxa)
    }
}