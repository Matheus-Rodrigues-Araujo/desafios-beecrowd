function encontrarInteiro(seq) {
    let somaAnterior = 0;
    for (let i = 0; i < seq.length; i++) {
      if (seq[i] === somaAnterior) {
        return seq[i];
      }
      somaAnterior += seq[i];
    }
    return null;
  }
  
  function processarInstancias(instancias) {
    let instancia = 1;
    for (let i = 0; i < instancias.length; i += 2) {
      const n = parseInt(instancias[i]);
      const seq = instancias[i + 1].split(' ').map(Number);
  
      const resultado = encontrarInteiro(seq);
  
      console.log(`Instancia ${instancia}`);
      if (resultado === null) {
        console.log('nao achei');
      } else {
        console.log(resultado);
      }
  
      instancia++;
      console.log();
    }
  }
  
  const instancias = [];
  let linhaAtual = 0;
  
  function lerInstancias() {
    const entrada = document.getElementById('entrada').value;
    const linhas = entrada.split('\n');
    for (let linha of linhas) {
      instancias.push(linha.trim());
    }
    processarInstancias(instancias);
  }
  
  document.getElementById('btnCalcular').addEventListener('click', lerInstancias);
  