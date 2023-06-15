function encontrarIndicePrimeiroNegativo(colecao) {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0) {
        return i;
      }
    }
    return -1;
  }
  
  const numeros = [1, 2, -3, 4, -5, 6];
  const indiceNegativo = encontrarIndicePrimeiroNegativo(numeros);
  
  if (indiceNegativo !== -1) {
    console.log("O primeiro número negativo está no índice:", indiceNegativo);
  } else {
    console.log("Não foi encontrado nenhum número negativo na coleção.");
  }
  