const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nomes = [];
const notas = [];

function lerDadosAlunos() {
  if (nomes.length < 5) {
    rl.question("Informe o nome do aluno: ", function(nome) {
      nomes.push(nome);

      rl.question("Informe a nota do aluno: ", function(nota) {
        notas.push(parseFloat(nota));

        lerDadosAlunos();
      });
    });
  } else {
    exibirAlunosAprovados();
    rl.close();
  }
}

function exibirAlunosAprovados() {
  console.log("Alunos aprovados (nota maior que 5.0):");

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 5.0) {
      console.log(nomes[i]);
    }
  }
}

lerDadosAlunos();
