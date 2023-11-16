
var numeroSecreto = parseInt((Math.random() * 10) + 1);
var tentativas = 0;
var chute;

while (chute != numeroSecreto) {
  chute = prompt('Digite um número entre 1 e 10. \nVocê só tem 5 tentativas!');
  tentativas++;

  if (chute == numeroSecreto) {
    alert('Parabéns! Você acertou em ' + tentativas + ' tentativas.');
  } 
  else if (tentativas == 5) {
    alert('Você perdeu! \nO número secreto era ' + numeroSecreto);
    break;
  } 
  else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor que ' + chute + '.\nNúmero de tentativas: ' + tentativas);
  } 
  else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior que ' + chute + '.\nNúmero de tentativas: ' + tentativas);
  }
}
