const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const notas = [];

function lerNotas() {
  rl.question("Informe a nota do aluno: ", function(nota) {
    notas.push(parseFloat(nota));

    if (notas.length < 10) {
      lerNotas();
    } else {
      exibirNotasMaioresQueCinco();
      rl.close();
    }
  });
}

function exibirNotasMaioresQueCinco() {
  console.log("Notas maiores que 5.0:");

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 5.0) {
      console.log(notas[i]);
    }
  }
}

lerNotas();
