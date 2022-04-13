// classe abstrata > Não pode ser instanciada

export class Conta {
    constructor(cliente, agencia, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Voce não deveria instanciar um objeto do tipo conta diretamente, pois esta é uma classe abstrata")
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
        this._taxa = 1;
        Conta.numeroDeContas += 1;
        // This.Constructor imprime a classe que foi chamada
    };
    static numeroDeContas = 0;


    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        };
    };

    get cliente(){
        return this._cliente;
    };

    get saldo() {
        return this._saldo;
    };

    get tipo() {
        return this._tipo;
    };
    // Método Abstrato
    saque(valor) {
        throw new Error("O método sacar da conta é abstrato")
    };

    _saque(valor, taxa){
        const valorSacado = valor * taxa
        if (this._saldo > valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }
    };

    depósito(valor) {
        if (valor > 0){
            this._saldo += valor
            console.log('Valor depositado!')
        } else {
            console.log('Impossível depositar este valor')
        };

    };

    transferir(valor, conta) {
        conta._saldo += valor;
        this._saldo -= valor;
        console.log(`Saldo conta1: ${this._saldo}, Saldo conta2: ${conta._saldo}`);
    };

};
