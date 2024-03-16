/* 
ENUNCIADO
  Escreva um programa que inverta os caracteres de um string.
*/

const str = "Desafio Técnico Target";

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString(str));
