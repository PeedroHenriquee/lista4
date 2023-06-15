const alunos = [];

for (let i = 0; i < 5; i++) {
  const aluno = {};

  aluno.nome = prompt("Informe o nome do aluno:");
  aluno.nota1 = parseFloat(prompt("Informe a primeira nota do aluno:"));
  aluno.nota2 = parseFloat(prompt("Informe a segunda nota do aluno:"));

  aluno.media = (aluno.nota1 + aluno.nota2) / 2;

  alunos.push(aluno);
}

console.log("Listagem de Alunos:");

for (let i = 0; i < alunos.length; i++) {
  const aluno = alunos[i];
  console.log("Nome:", aluno.nome);
  console.log("Nota 1:", aluno.nota1);
  console.log("Nota 2:", aluno.nota2);
  console.log("Média:", aluno.media.toFixed(2));
  console.log("--------------------");
}
