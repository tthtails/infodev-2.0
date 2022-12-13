import { Aluno } from "../classes/Aluno.js";
import { Curso } from "../classes/Curso.js";
import { Professor } from "../classes/Professor.js";
import { Participacao } from "../classes/Participacao.js";

const vetAlunos = [
    new Aluno("Henrique Galvão Prezotti", "05/05/2002", "172.068.172-46", "2022155"),
    new Aluno("Maria Alice Alves", "10/08/2002", "024.031.768-85", "2022105"),
    new Aluno("Lavínia Ramos", "05/12/2004", "054.714.570-56 ", "2022109"),
    new Aluno("Samir Coutinho Borges", "03/4/2001", "058.128.143-84", "2022198"),
    new Aluno("Stephany Cardoso", "10/11/1999", " 821.201.173-90  ", "2022188"),
    new Aluno("Thales de Souza Guasti", "19/12/2002", "127.511.517-95", "2022101"),
    new Aluno("Luna Caldeira", "14/12/2002", "865.451.275-00	", "2022190"),
    new Aluno("Wallison Dos Santos", "04/04/2004", "453.440.686-03", "2022177"),
    new Aluno("Paulo Cezar Borges dos Santos", "20/09/2002", "033.427.485-08", "2022166"),
    new Aluno("Joana Cavalcanti", "10/02/2000", "711.083.054-31 ", "2022102"),
    new Aluno("Kaylee Santos", "10/02/2004", "715.083.059-99 ", "202212"),
    new Aluno("Janice Clay", "10/05/2001", "772.083.056-11 ", "2022110"),
    new Aluno("Denise Castro", "12/05/1998", "773.083.066-66 ", "2022169"),
    new Aluno("Sabrina Teixeira", "12/04/1999", "124.132.655-03", "2022160"),
    new Aluno("Eduardo Moraes", "03/01/1984", "482.703.102-98", "20221184"),
    new Aluno("Clarice Fogaça", "23/12/2001", "412.042.008-66", "20221168"),
    new Aluno("João Lucas Cardoso", "10/06/1998", "870.184.431-80", "20221158"),
    new Aluno("Maria Julia Nogueira", "07/03/2002", "532.383.185-51", "20221656"),
    new Aluno("Lucas Gabriel Carvalho", "27/04/2002", "067.734.663-85", "20221688"),
    new Aluno("Davi Luiz Porto", "01/05/2001", "014.656.154-66", "20221595")
];

const vetProfessores = [
    new Professor("Archimedes Alves Detoni", "05/07/1980", "612.647.213-94", 15000),
    new Professor("Maycon Guedes Cordeiro", "09/08/1980", "712.847.313-04", 11000)
];


const vetCursos = [
    new Curso("JavaScript na web", 80, vetProfessores[0]),
    new Curso("HTML5 & CSS3", 80, vetProfessores[1]),
    new Curso("Lógica de programação", 70, vetProfessores[0]),
    new Curso("Modelagem de banco de dados", 80, vetProfessores[1])
];

export const vetParticipacoes = [
    new Participacao(90, 88, 90, 10, vetAlunos[0], vetCursos[0]), //i = 0 / .length = 6 / i < length = 5 / i++
    new Participacao(75, 80, 80, 10, vetAlunos[1], vetCursos[3]),
    new Participacao(45, 30, 40, 22, vetAlunos[2], vetCursos[0]),
    new Participacao(100, 95, 100, 15, vetAlunos[3], vetCursos[1]),
    new Participacao(70, 90, 50, 20, vetAlunos[4], vetCursos[0]),
    new Participacao(100, 65, 95, 10, vetAlunos[5], vetCursos[1]),
    new Participacao(70, 65, 80, 8, vetAlunos[6], vetCursos[1]),
    new Participacao(80, 95, 80, 9, vetAlunos[7], vetCursos[3]),
    new Participacao(100, 95, 90, 5, vetAlunos[8], vetCursos[2]),
    new Participacao(100, 85, 100, 7, vetAlunos[9], vetCursos[0]),
    new Participacao(34, 96, 60, 25, vetAlunos[10], vetCursos[2]),
    new Participacao(55, 75, 90, 23, vetAlunos[11], vetCursos[3]),
    new Participacao(0, 50, 40, 22, vetAlunos[12], vetCursos[3]),
    new Participacao(19, 95, 18, 17, vetAlunos[13], vetCursos[0]),
    new Participacao(70, 40, 50, 20, vetAlunos[14], vetCursos[2]),
    new Participacao(100, 79, 88, 10, vetAlunos[15], vetCursos[1]),
    new Participacao(70, 95, 80, 8, vetAlunos[16], vetCursos[2]),
    new Participacao(99, 100, 70, 19, vetAlunos[17], vetCursos[2]),
    new Participacao(100, 0, 50, 22, vetAlunos[18], vetCursos[3]),
    new Participacao(30, 75, 80, 0, vetAlunos[19], vetCursos[0])
];