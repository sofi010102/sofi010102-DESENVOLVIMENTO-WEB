//1. Completar a função para somar dois números
R:
function somar(a, b) {
return a + b;
}
console.log(somar(5, 3)); // 8
//divisor de codigo...............................................................................................

//2. Criar uma função que retorne 'Par' ou 'Ímpar'
R:
function parOuImpar(numero) {
return numero % 2 === 0 ? 'Par' : 'Ímpar';
}
console.log(parOuImpar(4)); // 'Par'
//divisor de codigo...............................................................................................

//3. Escreva um programa que converta metros em centímetros e milímetros.
R:
function converterMetros(valorEmMetros) {
    let centimetros = valorEmMetros * 100;
    let milimetros = valorEmMetros * 1000;
  
    console.log(`${valorEmMetros} metros = ${centimetros} centímetros`);
    console.log(`${valorEmMetros} metros = ${milimetros} milímetros`);
  }
  
  converterMetros(2); // Exemplo com 2 metros
//divisor de codigo...............................................................................................

//4.Dado o array const frutas = ['maçã', 'banana'];, adicione as frutas 'laranja' e 'uva'
//ao final do array, usando método.
R:
const frutas = ['maçã', 'banana'];

// Adicionando 'laranja' e 'uva' ao final usando push
frutas.push('laranja', 'uva');

console.log(frutas); // ['maçã', 'banana', 'laranja', 'uva']
//divisor de codigo...............................................................................................

//5.Considere o array const numeros = [1, 2, 3, 4, 5];. Remova o último elemento do
//array e armazene-o em uma variável chamada ultimoNumero, usando método.
R:
const numeros = [1, 2, 3, 4, 5];

// Remove o último elemento e armazena na variável
const ultimoNumero = numeros.pop();

console.log(ultimoNumero); // 5
console.log(numeros);      // [1, 2, 3, 4]
//divisor de codigo...............................................................................................

//6. Dado o array const cores = ['vermelho', 'azul', 'verde'];, remova o primeiro
//elemento e armazene-o em uma variável chamada primeiraCor, usando método .
R:
const cores = ['vermelho', 'azul', 'verde'];

// Remove o primeiro elemento e armazena na variável
const primeiraCor = cores.shift();

console.log(primeiraCor); // 'vermelho'
console.log(cores);       // ['azul', 'verde']
//divisor de codigo...............................................................................................

//7.Com o array const animais = ['cachorro', 'gato'];, adicione os animais 'elefante' e
//'leão' no início do array, usando método.
R:
const animais = ['cachorro', 'gato'];

// Adiciona 'elefante' e 'leão' no início do array
animais.unshift('elefante', 'leão');

console.log(animais); // ['elefante', 'leão', 'cachorro', 'gato']
//divisor de codigo...............................................................................................

//8.Dado o array const numeros = [10, 20, 30, 40, 50];, remova os dois primeiros
//elementos e, em seguida, adicione os números 5 e 15 nas primeiras posições,
//usando método.
R:
const numeros = [10, 20, 30, 40, 50];

// Remove os dois primeiros elementos
numeros.shift(); // remove 10
numeros.shift(); // remove 20

// Adiciona 5 e 15 no início do array
numeros.unshift(15);
numeros.unshift(5);

console.log(numeros); // [5, 15, 30, 40, 50]
//divisor de codigo...............................................................................................

//9. Considere o array const letras = ['a', 'b', 'c', 'd', 'e'];. Crie um novo array contendo
//apenas os elementos 'b', 'c' e 'd', usando método
R:
const letras = ['a', 'b', 'c', 'd', 'e'];

// Cria um novo array com os elementos 'b', 'c' e 'd'
const subArray = letras.slice(1, 4); // do índice 1 até 3 (4 não incluso)

console.log(subArray); // ['b', 'c', 'd']
//divisor de codigo...............................................................................................

//10. Dado os arrays const array1 = [1, 2, 3]; e const array2 = [4, 5, 6]; crie um novo
//array que combine os elementos de ambos, usando o método concat
R:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combina os dois arrays usando concat
const arrayCombinado = array1.concat(array2);

console.log(arrayCombinado); // [1, 2, 3, 4, 5, 6]
//divisor de codigo...............................................................................................

//11. Criar uma função que recebe um nome e retorna uma saudação personalizada
//function saudacao(nome) {
// Complete para retornar "Olá, <nome>!"
//}
//console.log(saudacao("Carlos")); // "Olá, Carlos!"
//console.log(saudacao("Ana")); // "Olá, Ana!"
R:
function saudacao(nome) {
  // Retorna uma saudação personalizada
  return `Olá, ${nome}!`;
}

console.log(saudacao("Carlos")); // "Olá, Carlos!"
console.log(saudacao("Ana"));    // "Olá, Ana!"
//divisor de codigo...............................................................................................




























































