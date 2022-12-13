import { Professor } from "../classes/Professor.js";

export class Curso {
    #nomeCurso;
    #cargaHoraria;
    #professor;

    constructor(nomeCurso, cargaHoraria, professor) {
        this.#nomeCurso = nomeCurso.toUpperCase();
        this.#cargaHoraria = cargaHoraria;
        this.#professor = professor;
    }

    get nomeCurso() {
        return this.#nomeCurso;
    }

    get cargaHoraria() {
        return this.#cargaHoraria;
    }

    get professor() {
        return this.#professor;
    }

    set professor(professor) {
        if (professor != undefined && professor instanceof Professor) {
            this.#professor = professor;
            return professor;
        }
        return null;
    }

    toString() {
        return "Nome do curso: " + this.#nomeCurso +
            "\nCarga horária: " + this.#cargaHoraria +
            "\nProfessor: " + this.#professor.nome;
    }
}