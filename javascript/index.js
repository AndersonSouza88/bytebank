import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaPoupanca(100, 1002, cliente2);
conta2.sacar(50);

const contaSalario = new ContaSalario(1001,cliente2);
contaSalario.depositar(300);
contaSalario.sacar(100);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(contaSalario);
/* const conta3 = new Conta(500,1003,cliente2) isso não deve ser feito */
/* console.log(conta3); */