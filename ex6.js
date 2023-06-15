const numeros = [];
const quantidade = parseInt(prompt("Quantos números deseja inserir no array?"));

for (let i = 0; i < quantidade; i++) {
  const numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}

console.log("Array original: " + numeros);

const arrayInvertido = numeros.slice().reverse();

console.log("Array invertido: " + arrayInvertido);
