import { Cliente } from "./Cliente/Cliente.js";
import { Diretor } from "./Funcionário/Diretor.js";
import { Gerente } from "./Funcionário/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 11122233345, 10000)
const gerente = new Gerente("Lucas", 11123324141, 7500.50)
diretor.cadastrarSenha("Luc2436!")

const senhaValida = SistemaAutenticacao.login(diretor, "Luc2436!")


console.log(senhaValida)