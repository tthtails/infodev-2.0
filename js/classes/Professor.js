import { Pessoa } from "../classes/Pessoa.js";

export class Professor extends Pessoa {
    #salario;

    constructor (nome, dtNascimento, cpf, salario) {
        super (nome, dtNascimento, cpf);
        this.salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    set salario(newSalario) {
        if (newSalario < 0) {
            return null;
        }
        this.#salario = newSalario;
        return this.#salario;
    }

    toString () {
        return super.toString() + 
            "\nSalário: " + (this.#salario).toFixed(2);
    }
}