function calcularRodadas() {
  var apostaInicial = parseInt(document.getElementById('apostaInicial').value);
  var saldoAtual = parseInt(document.getElementById('saldoAtual').value);
  var multiplicador = parseFloat(document.getElementById('multiplicador').value);

  var rodada = 0;

  if ((multiplicador == 1.08 || multiplicador == 1.10) && apostaInicial * multiplicador < 12) {
    var errorMessage = "A aposta inicial deve ser maior ou igual a " + Math.ceil(12 / multiplicador) + " para o multiplicador selecionado.";
    document.getElementById('error').innerHTML = errorMessage;
    return;
  }

  document.getElementById('error').innerHTML = ''; // Limpa a mensagem de erro

  while (saldoAtual >= apostaInicial) {
    saldoAtual -= apostaInicial;
    apostaInicial = Math.ceil(apostaInicial * multiplicador);
    rodada++;
  }

  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = "Quantidade de apostas possíveis: " + rodada;
}
