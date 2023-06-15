const notas = [];
let somaNotas = 0;

for (let i = 0; i < 80; i++) {
  const nota = parseFloat(prompt("Informe a nota do aluno " + (i + 1) + ":"));
  notas.push(nota);
  somaNotas += nota;
}

console.log("Notas dos alunos:");

for (let i = 0; i < notas.length; i++) {
  console.log("Aluno " + (i + 1) + ": " + notas[i]);
}

const mediaTurma = somaNotas / notas.length;

console.log("Média da turma: " + mediaTurma.toFixed(2));
