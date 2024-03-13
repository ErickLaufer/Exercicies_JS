function inverterNomes() {
  var nomes = [];
  nomes.push(document.getElementById('nome1').value);
  nomes.push(document.getElementById('nome2').value);
  nomes.push(document.getElementById('nome3').value);
  nomes.push(document.getElementById('nome4').value);
  nomes.push(document.getElementById('nome5').value);

  nomes.reverse();

  document.getElementById('nome1').value = nomes[0];
  document.getElementById('nome2').value = nomes[1];
  document.getElementById('nome3').value = nomes[2];
  document.getElementById('nome4').value = nomes[3];
  document.getElementById('nome5').value = nomes[4];
}


function intercalar(palavra1, palavra2) {
  var resultado = '';
  var tamanho = Math.max(palavra1.length, palavra2.length);

  for (var i = 0; i < tamanho; i++) {
    if (palavra1[i]) {
      resultado += palavra1[i];
    }
    if (palavra2[i]) {
      resultado += palavra2[i];
    }
  }

  return resultado;
}


function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % banners.length;
  document.getElementById('banner').src = banners[bannerAtual];
}

function pausar() {
  clearInterval(intervalo);
}

function continuar() {
  intervalo = setInterval(trocaBanner, 4000);
}

continuar();