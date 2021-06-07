import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        super(0 , agencia , cliente);
    
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){//taxa da contacorrente
        let taxa = 1.05;
        return this._sacar(valor , taxa);
    }
}
