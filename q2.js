/* 
ENUNCIADO
  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const n = 21;

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  while (c < n) {
    c = a + b;
    a = b;
    b = c;
  }
  if (c === n) return `O número ${n} pertence à sequência de Fibonacci`;
  return `O número ${n} não pertence à sequência de Fibonacci`;
}

console.log(fibonacci(n));

/* 
A função também pode ser reescrita de forma recursiva, porém, dependendo do número informado, pode ocorrer um erro de stack overflow, pois a função chama a si mesma muitas vezes.
*/
