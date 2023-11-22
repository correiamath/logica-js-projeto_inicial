alert("Welcome to the secret number game!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert(`O número secreto é maior que ${chute}!`);
    } else {
      alert(`O número secreto é menor que ${chute}!`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `🎉Você acertou!!! O número secreto é ${numeroSecreto}, você descobriu o número sercreto em ${tentativas} ${palavraTentativa}🎉`
);
