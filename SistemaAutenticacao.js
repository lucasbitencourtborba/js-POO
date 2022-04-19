/*
Ser autenticavel significa ter o método autenticar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        } else {
            return "Não possui autenticação no sistema"
        }
    }

    static ehAutenticavel(autenticavel){
        if (typeof autenticavel.autenticar === 'function'){
            return true
        } else return false
    }
}