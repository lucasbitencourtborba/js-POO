import { ContaCorrente } from "./Conta/Contacorrente.js";
import { Cliente } from "./Cliente/Cliente.js";
import { Conta } from "./Conta/Conta.js";


const client1 = new Cliente("Ricardo", "11122233304");
const client2 = new Cliente("Lucas", "99988877766");


const conta1 = new ContaCorrente(client1, 1001, 500)
conta1.saque(100)
console.log(conta1)
const conta2 = new Conta(client2, 1001, 1500);
console.log(conta2);
