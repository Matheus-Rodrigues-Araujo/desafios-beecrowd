function encontrarInteiro(seq) {
  let somaAnterior = 0;
  console.log(somaAnterior)
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === somaAnterior) {
      console.log(seq[i])
      return seq[i];
    }
    somaAnterior += seq[i];
  }
  return null;
}

function processarInstancias() {
  const seq = [1,2,3,4,5,6,7];

  const resultado = encontrarInteiro(seq);

  console.log(`Resultado: ${resultado}`);
}

processarInstancias();
