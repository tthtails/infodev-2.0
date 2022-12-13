import { Aluno } from "../classes/Aluno.js";
import { Curso } from "../classes/Curso.js";
import { Professor } from "../classes/Professor.js";
import { Participacao } from "../classes/Participacao.js";

const aluno1 = new Aluno("Henrique Galvão Prezotti", "05/05/2002", "172.068.172-46", "2022155");
const aluno2 = new Aluno("Maria Alice Alves", "10/08/2002", "024.031.768-85", "2022105");
const aluno3 = new Aluno("Lavínia Ramos", "05/12/2004", "054.714.570-56 ", "2022109");
const aluno4 = new Aluno("Samir Coutinho Borges", "03/4/2001", "058.128.143-84", "2022198");
const aluno5 = new Aluno("Stephany Cardoso", "10/11/1999", " 821.201.173-90  ", "2022188");
const aluno6 = new Aluno("Thales de Souza Guasti", "19/12/2002", "127.511.517-95", "2022101");
const aluno7 = new Aluno("Luna Caldeira", "14/12/2002", "865.451.275-00	", "2022190");
const aluno8 = new Aluno("Wallison Dos Santos", "04/04/2004", "453.440.686-03", "2022177");
const aluno9 = new Aluno("Paulo Cezar Borges dos Santos", "20/09/2002", "033.427.485-08", "2022166");
const aluno10 = new Aluno("Joana Cavalcanti", "10/02/2000", "711.083.054-31 ", "2022102");
const aluno11 = new Aluno("Kaylee Santos", "10/02/2004", "715.083.059-99 ", "202212");
const aluno12 = new Aluno("Janice Clay", "10/05/2001", "772.083.056-11 ", "2022110");
const aluno13 = new Aluno("Denise Castro", "12/05/1998", "773.083.066-66 ", "2022169");
const aluno14 = new Aluno("Sabrina Teixeira", "12/04/1999", "124.132.655-03", "2022160");
const aluno15 = new Aluno("Eduardo Moraes", "03/01/1984", "482.703.102-98", "20221184");
const aluno16 = new Aluno("Clarice Fogaça", "23/12/2001", "412.042.008-66", "20221168");
const aluno17 = new Aluno("João Lucas Cardoso", "10/06/1998", "870.184.431-80", "20221158");
const aluno18 = new Aluno("Maria Julia Nogueira", "07/03/2002", "532.383.185-51", "20221656");
const aluno19 = new Aluno("Lucas Gabriel Carvalho", "27/04/2002", "067.734.663-85", "20221688");
const aluno20 = new Aluno("Davi Luiz Porto", "01/05/2001", "014.656.154-66", "20221595");


const professor1 = new Professor("Archimedes Alves Detoni", "05/07/1980", "612.647.213-94", 15000);
const professor2 = new Professor("Maycon Guedes Cordeiro", "09/08/1980", "712.847.313-04", 11000);

const curso1 = new Curso("JavaScript na web", 80, professor1);
const curso2 = new Curso("HTML5 & CSS3", 80, professor2);
const curso3 = new Curso("Lógica de programação", 70, professor1);
const curso4 = new Curso("Modelagem de banco de dados", 80, professor2);

const participacao1 = new Participacao(90, 88, 90, 10, aluno1, curso1); //i = 0 / .length = 6 / i < length = 5 / i++
const participacao2 = new Participacao(75, 80, 80, 10, aluno2, curso4); 
const participacao3 = new Participacao(45, 30, 40, 22, aluno3, curso1);
const participacao4 = new Participacao(100, 95, 100, 15, aluno4, curso2);
const participacao5 = new Participacao(70, 90, 50, 20, aluno5, curso1);
const participacao6 = new Participacao(100, 65, 95, 10, aluno6, curso2);
const participacao7 = new Participacao(70, 65, 80, 8, aluno7, curso2);
const participacao8 = new Participacao(80, 95, 80, 9, aluno8, curso4);
const participacao9 = new Participacao(100, 95, 90, 5, aluno9, curso3);
const participacao10 = new Participacao(100, 85, 100, 7, aluno10, curso1);
const participacao11 = new Participacao(34, 96, 60, 25, aluno11, curso3);
const participacao12 = new Participacao(55, 75, 90, 23, aluno12, curso4);
const participacao13 = new Participacao(0, 50, 40, 22, aluno13, curso4);
const participacao14 = new Participacao(19, 95, 18, 17, aluno14, curso1);
const participacao15 = new Participacao(70, 40, 50, 20, aluno15, curso3);
const participacao16 = new Participacao(100, 79, 88, 10, aluno16, curso2);
const participacao17 = new Participacao(70, 95, 80, 8, aluno17, curso3);
const participacao18 = new Participacao(99, 100, 70, 19, aluno18, curso3);
const participacao19 = new Participacao(100, 0, 50, 22, aluno19, curso4);
const participacao20 = new Participacao(30, 75, 80, 0, aluno20, curso1);

export const vetParticipacoes = [participacao1, participacao2, participacao3, participacao4, participacao5, participacao6, participacao7, participacao8, participacao9, participacao10, participacao11, participacao12, participacao13, participacao14, participacao15, participacao16, participacao17, participacao18, participacao19, participacao20];