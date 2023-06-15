const numeros = [];

for (let i = 0; i < 3; i++) {
  const numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}

console.log("Array original: " + numeros);

numeros.reverse();

console.log("Array invertido: " + numeros);
