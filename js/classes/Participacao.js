import { Aluno } from "../classes/Aluno.js";
import { Curso } from "../classes/Curso.js";
import { Pessoa } from "../classes/Pessoa.js";
import { Professor } from "../classes/Professor.js";

export class Participacao {
    #nota1;
    #nota2;
    #notaParticipacao;
    #faltas;
    #aluno;
    #curso;

    constructor(nota1, nota2, notaParticipacao, faltas, aluno, curso) {
        this.#nota1 = nota1;
        this.#nota2 = nota2;
        this.#notaParticipacao = notaParticipacao;
        this.#faltas = faltas;
        this.aluno = aluno;
        this.curso = curso;
    }

    get nota1() {
        return this.#nota1;
    }

    set nota1(newNota1) {
        if (newNota1 == "") {
            return false;
        }
        this.#nota1 = newNota1;
        return this.#nota1;
    }

    get nota2() {
        return this.#nota2;
    }

    set nota2(newNota2) {
        if (newNota2 == "") {
            return false;
        }
        this.#nota2 = newNota2;
        return this.#nota2;
    }

    get notaParticipacao() {
        return this.#notaParticipacao;
    }

    set notaParticipacao(newNotaParticipacao) {
        if (newNotaParticipacao == "") {
            return false;
        }
        this.#notaParticipacao = newNotaParticipacao;
        return this.#notaParticipacao;
    }

    get faltas() {
        return this.#faltas;
    }

    set faltas(newFaltas) {
        if (newFaltas == "") {
            return false;
        }
        this.#faltas = newFaltas;
        return this.#faltas;
    }

    get aluno() {
        return this.#aluno;
    }

    set aluno(aluno) {
        if (aluno != undefined && aluno instanceof Aluno) {
            this.#aluno = aluno;
            return aluno;
        }
        return false;
    }

    get curso() {
        return this.#curso;
    }

    set curso(curso) {
        if (curso != undefined && curso instanceof Curso) {
            this.#curso = curso;
            return curso;
        }
        return false;
    }

    media() {
        let mediaNotas = (this.#nota1 * 20 + this.#nota2 * 40 + this.#notaParticipacao * 40) / 100;
        return mediaNotas;
    }

    pctFalta() {
        let pctFaltas = (this.#faltas / 50) * this.#curso.cargaHoraria;
        return pctFaltas;
    }

    aprovacao() {
        if (this.media() >= 60 && this.pctFalta() <= 25) {
            return "Aprovado!";
        }
        return "Reprovado!";
    }

    toString() {
        return "Nota da primeira prova: " + this.#nota1 +
            "\nNota da segunda prova: " + this.#nota2 +
            "\nNota da participação: " + this.#notaParticipacao +
            "\nFaltas: " + this.#faltas +
            "\nAluno: " + this.#aluno.nome +
            "\nCurso: " + this.#curso.nomeCurso +
            "\nMedia: " + this.media() +
            "\nPercentual de faltas: " + this.pctFalta() +
            "\nStatus de aprovação: " + (this.aprovacao()).toUpperCase();
    }
}