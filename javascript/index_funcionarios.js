import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Mateus", 10000, 12345678901);
diretor.cadastrarSenha ("enoixquevoa");

const gerente = new Gerente("Ricardo", 5000, 10987654321);
gerente.cadastrarSenha("senhaincorreta");

const diretorEstaLogado = SistemaAutenticacao.login(diretor , "enoixquevoa");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente , "senhaincorreta");

const cliente = new Cliente ("Lais" , 98765432115 , "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente , "123");

const contaExemplo = new ContaCorrente(cliente , 10001);
const contaEstaLogada = SistemaAutenticacao.login(contaExemplo, 123);

console.log(contaEstaLogada);

/*  console.log(cliente); */
console.log(diretorEstaLogado ,gerenteEstaLogado);
console.log(clienteEstaLogado);