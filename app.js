// alert("Welcome to the secret number game!");

// let numeroSecreto = parseInt(Math.random() * 100 + 1);

// console.log(numeroSecreto);

// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//   chute = prompt("Choose a number between 1 and 100");
//   if (chute == numeroSecreto) {
//     break;
//   } else {
//     if (numeroSecreto > chute) {
//       alert(`O número secreto é maior que ${chute}!`);
//     } else {
//       alert(`O número secreto é menor que ${chute}!`);
//     }
//     tentativas++;
//   }
// }

// let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

// alert(
//   `🎉Você acertou!!! O número secreto é ${numeroSecreto}, você descobriu o número sercreto em ${tentativas} ${palavraTentativa}🎉`
// );

// console.log("Boas vindas!!!");
// let nome = "Matheus";
// alert(`Olá ${nome}`);
// linguagemPreferida = prompt(
//   "Qual a linguagem de programação que você mais gosta?"
// );
// alert(`Ah, ${linguagemPreferida}! Que legal!!!`);
// {
//   alert(`Iniciando adição...`);
//   let valor1 = prompt("insira um valor para somar");
//   let valor2 = prompt("insira outro valor para somar");
//   let resultado = +valor1 + +valor2;
//   alert(`A soma de ${valor1} e ${valor2} é ${resultado}`);
// }

// {
//   alert(`Iniciando subtração...`);
//   let valor1 = prompt("insira um valor para subtrair");
//   let valor2 = prompt("insira outro valor para subtrair");
//   let resultado = +valor1 - +valor2;
//   alert(`A diferença entre ${valor1} e ${valor2} é ${resultado}`);
// }
// alert("Verificar maioridade");
// let idade = prompt("Insira sua idade aqui");
// if (idade >= 18) {
//   alert("você é de maior");
// } else {
//   alert("você é de menor");
// }
// let numero = prompt("insira um numero");
// if (numero > 0) {
//   alert("número positivo");
// } else {
//   if (numero == 0) {
//     alert("numero neutro");
//   } else {
//     alert("numero negativo");
//   }
// }

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let nota = parseInt(Math.random() * 10);
// let statusNota = nota >= 7 ? "aprovado" : "recuperação";
// console.log(`Sua nota foi ${nota} e seu status é: ${statusNota}`);

let randomNumero1 = Math.random();
alert(randomNumero1);
let randomNumero2 = parseInt(Math.random() * 10 + 1);
alert(randomNumero2);
let randomNumero3 = parseInt(Math.random() * 1000 + 1);
alert(randomNumero3);
