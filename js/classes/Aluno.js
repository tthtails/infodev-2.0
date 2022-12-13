import { Pessoa } from "../classes/Pessoa.js";

export class Aluno extends Pessoa {
    #numMatricula;

    constructor (nome, dtNascimento, cpf, numMatricula) {
        super (nome, dtNascimento, cpf);
        this.#numMatricula = numMatricula;
    }

    get numMatricula() {
        return this.#numMatricula;
    }

    toString () {
        return super.toString() + 
           "\nNúmero de matrícula: " + this.#numMatricula;
    }
}