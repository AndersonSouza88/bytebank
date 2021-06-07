import { Conta } from "./Conta.js";

//herença
export class ContaPoupanca extends Conta {

    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial , agencia , cliente);

    }
    sacar(valor){//taxa da poupança
        let taxa = 1.01;
        return this._sacar(valor , taxa);
    }

}