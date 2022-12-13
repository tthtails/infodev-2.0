import { vetParticipacoes } from "../classes/dados.js";

var inAluno = document.getElementById("inAluno");
var inCurso = document.getElementById("inCurso");

window.onload = tabelaFiltro;

function tabelaFiltro() {
    var nomeAluno = inAluno.value;
    var cursoFiltro = inCurso.value;

    var corpoTabela = document.querySelector(".corpoTabela");

    corpoTabela.innerHTML = "";
    
    for (let i = 0; i < vetParticipacoes.length; i++) {
        if (vetParticipacoes[i].curso.nomeCurso.toLocaleLowerCase().indexOf(cursoFiltro.toLocaleLowerCase()) != -1 && vetParticipacoes[i].aluno.nome.toLocaleLowerCase().indexOf(nomeAluno.toLocaleLowerCase()) != -1) {
            var tr = document.createElement("tr");
            var tdNomeAluno = document.createElement("td");
            var tdNomeCurso = document.createElement("td");
            var tdNomeProfessor = document.createElement("td");
            var tdNota1 = document.createElement("td");
            var tdNota2 = document.createElement("td");
            var tdParticipacao = document.createElement("td");
            var tdFalta = document.createElement("td");
            var tdMedia = document.createElement("td");
            var tdPercentualFaltas = document.createElement("td");
            var tdAprovacao = document.createElement("td");

    

            tdNomeAluno.textContent = vetParticipacoes[i].aluno.nome;
            tdNomeCurso.textContent = vetParticipacoes[i].curso.nomeCurso;
            tdNomeProfessor.textContent = vetParticipacoes[i].curso.professor.nome;
            tdNota1.textContent = vetParticipacoes[i].nota1;
            tdNota2.textContent = vetParticipacoes[i].nota2;
            tdParticipacao.textContent = vetParticipacoes[i].notaParticipacao;
            tdFalta.textContent = vetParticipacoes[i].faltas;
            tdMedia.textContent = vetParticipacoes[i].media();
            tdPercentualFaltas.textContent = vetParticipacoes[i].pctFalta().toFixed(1);
            tdAprovacao.textContent = vetParticipacoes[i].aprovacao().toLocaleUpperCase();

            tr.appendChild(tdNomeAluno);
            tr.appendChild(tdNomeCurso);
            tr.appendChild(tdNomeProfessor);
            tr.appendChild(tdNota1);
            tr.appendChild(tdNota2);
            tr.appendChild(tdParticipacao);
            tr.appendChild(tdFalta);
            tr.appendChild(tdMedia);
            tr.appendChild(tdPercentualFaltas);
            tr.appendChild(tdAprovacao);

            corpoTabela.appendChild(tr);
        }


    }
}

inAluno.addEventListener("keyup", tabelaFiltro);
inCurso.addEventListener("keyup", tabelaFiltro);