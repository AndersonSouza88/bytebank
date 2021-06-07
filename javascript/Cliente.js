export class Cliente{
    
    get cpf(){
        return this._cpf;
    }
    /* get senha(){
        return this._senha;
    } */
    //interface
    autenticar(senha){
        return senha == this._senha;
    }

    constructor(nome, cpf , senha){
        this.nome = nome;
        this._cpf = cpf;

        this._senha = senha;
    }
}