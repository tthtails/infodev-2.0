export class Pessoa {
    #nome;
    #dtNascimento;
    #cpf;

    constructor (nome, dtNascimento, cpf) {
        this.#nome = nome.toUpperCase();
        this.#dtNascimento = dtNascimento;
        this.#cpf = cpf;
    }
    
    get nome(){
        return this.#nome;
    }

    set nome(newNome){
        if (newNome == "") {
            return null;
        } 
        this.#nome = newNome.toUpperCase();
        return this.#nome;
    }

    get dtNascimento(){
        return this.#dtNascimento;
    }

    set dtNascimento(newDtNascimento){
        if (newDtNascimento == "" || newDtNascimento.length != 8) {
            return null;
        } 
        this.#dtNascimento = newdtNascimento;
        return this.#dtNascimento;
    }

    get cpf(){
        return this.#cpf;
    }
    
    toString(){
        return "Nome: " + this.#nome +
            "\nData de nascimento: " + this.#dtNascimento +
            "\nCPF: " + this.#cpf;
    }
}
