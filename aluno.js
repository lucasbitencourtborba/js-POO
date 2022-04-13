class aluno {
    constructor(matricula, nome, nota1, nota2, notaDeTrabalho){
        this.matricula = matricula
        this._nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.notaDeTrabalho = notaDeTrabalho
        this.media = (this.nota1 + this.nota2 + this.notaDeTrabalho) / 3
    };

    mediaDoAluno() {
        console.log(`Média do aluno: ${this.media.toFixed(1)}`)
    }

    final() {
        if (this.media >= 6) {
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
    }
}

const aluno1 = new aluno(1543, "Lucas", 4.3, 3, 7)
aluno1.nome = 'Pedro'
console.log(aluno1.nome)
aluno1.mediaDoAluno()
aluno1.final()