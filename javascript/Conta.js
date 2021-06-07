//classe abstrata/generica
export class Conta {
    constructor(/* tipo */saldoInicial, agencia, cliente) {
        /*    this._tipo = tipo; */

        //reistringir que seja criado um objeto do tipo Conta, pois a classe é abstrata e deve somente ser herdada
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe ABSTRATA!! ")
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente


    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        throw new Error("Deve-se implementar o método Sacar na classe!")
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    /* 
if(this._tipo == "corrente"){
        taxa = 1.05;
    }
    if(this._tipo == "poupanca"){
        taxa = 1.01;
    }
    if(this._tipo == "empresarial"){
        taxa = 1.09;
    }  */

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}