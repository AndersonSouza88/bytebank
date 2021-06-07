/* ser usuário significa ter a propriedade "senha"
    usuario:cliente ou funcionario(gerente e diretor)
*/

export class SistemaAutenticacao {

    static login(usuario, senha) {
        if(SistemaAutenticacao.ehAutenticavel(usuario)){
            return usuario.autenticar(senha);
        }
       return false;
    }
    static ehAutenticavel(usuario){
        //verificando se o metodo "autenticar" existe dentro do usuário
       return "autenticar" in usuario && usuario.autenticar instanceof Function
       // verificar se o metodo é uma function
    }
}
