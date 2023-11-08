// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert(mensagemDeErro);
// let nome = prompt("Qual é o seu nome?");
// let idade = prompt("Qual é sua idade?");
// if (idade >= 18) {
//   alert("Pode tirar a habilitacão!");
// } else {
//   let idadeFaltando;
//   if (18 - idade == 1) {
//     idadeFaltando = "ainda falta 1 ano para poder tirar a habilitacão!";
//   } else {
//     idadeFaltando = `ainda faltam ${
//       18 - idade
//     } anos para poder tirar a habilitacão!`;
//   }
//   alert(idadeFaltando);
// }

alert("Welcome to the secret number game!");

let numeroSecreto = 12;

console.log(numeroSecreto);

let chute;

while (chute != numeroSecreto) {
  let chute = prompt("Choose a number between 1 and 100");

  if (chute == numeroSecreto) {
    alert(`🎉You won!!! The secret number really is ${numeroSecreto}!🎉`);
  } else {
    if (numeroSecreto > chute) {
      alert(`O número secreto é maior que ${chute}!`);
    } else {
      alert(`O número secreto é menor que ${chute}!`);
    }
  }
}
