import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var al: Aluno;
al = new Aluno();

al.setNome("Edson");
al.setCurso("Generates");
al.setEmail("Edson@Edson.com.br");
al.setTelefone("+55 97070-7070");
al.setNumRegistro(7070);
al.setAnoMatricula(2019);
console.log(al);

var pr: Professor;
pr = new Professor();

pr.setNome("Cleiton");
pr.setAreaFormacao("Enjienieiro da compiuteichion");
//Tradução : Engenheiro da Computação
pr.setEmail("cleiton@cleiton.com");
pr.setTelefone("+55 91234-5678");
pr.setNumRegistro(816111);
pr.setValorHora(124);
console.log(pr);

var a2:Aluno;
//a2 está apontando para al, ou seja, ele não fez uma cópia, mas sim um ponteiro
//Ambos pondendo alterar os mesmos dados.
a2 = al;