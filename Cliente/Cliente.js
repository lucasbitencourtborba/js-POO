export class Cliente {
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    
    autenticar(senha){
        return this._senha == senha
    }

    get cpf(){
        return this._cpf
    }
    
}