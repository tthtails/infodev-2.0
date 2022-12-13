import { Aluno } from "../classes/Aluno.js";
import { Curso } from "../classes/Curso.js";

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
        this.#aluno = aluno;
        this.#curso = curso;
    }

    get nota1() {
        return this.#nota1;
    }

    set nota1(newNota1) {
        if (isNaN(newNota1)) {
            return NaN;
        }
        this.#nota1 = newNota1;
        return this.#nota1;
    }

    get nota2() {
        return this.#nota2;
    }

    set nota2(newNota2) {
        if (isNaN(newNota2)) {
            return NaN;
        }
        this.#nota2 = newNota2;
        return this.#nota2;
    }

    get notaParticipacao() {
        return this.#notaParticipacao;
    }

    set notaParticipacao(newNotaParticipacao) {
        if (newNotaParticipacao == "") {
            return null;
        }
        this.#notaParticipacao = newNotaParticipacao;
        return this.#notaParticipacao;
    }

    get faltas() {
        return this.#faltas;
    }

    set faltas(newFaltas) {
        if (isNaN(newFaltas)) {
            return NaN;
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
        return null;
    }

    get curso() {
        return this.#curso;
    }

    set curso(curso) {
        if (curso != undefined && curso instanceof Curso) {
            this.#curso = curso;
            return curso;
        }
        return null;
    }

    media() {
        let mediaNotas = (this.#nota1 * 20 + this.#nota2 * 40 + this.#notaParticipacao * 40) / 100;
        return mediaNotas;
    }

    pctFalta() {
        let pctFaltas = (this.#faltas / 50) * this.#curso.cargaHoraria;
        return pctFaltas;
    }

    isAprovado() {
        if (this.media() >= 60 && this.pctFalta() <= 25) {
            return true;
        }
        return false;
    }

    toString() {
        let strAux = "Nota da primeira prova: " + this.#nota1 +
            "\nNota da segunda prova: " + this.#nota2 +
            "\nNota da participação: " + this.#notaParticipacao +
            "\nFaltas: " + this.#faltas +
            "\nAluno: " + this.#aluno.nome +
            "\nCurso: " + this.#curso.nomeCurso +
            "\nMedia: " + this.media() +
            "\nPercentual de faltas: " + this.pctFalta() +
            "\nStatus Final: ";

        strAux += this.isAprovado() ? "APROVADO" : "REPROVADO";

        return strAux;
    }
}
/* null : 
if (newAlgumaCoisa != undefined) {
    return this.#algumaCoisa;
} else {
    return null
}
*/

/* false || true :
if (return this.#algumaCoisa) {
    return true;
} else {
    return false;
*/

/* NaN :
if (isNan(newAlgumaCoisa)) {
    return Nan;
} else {
    return this.#algumaCoisa;
}
*/