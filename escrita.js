//12. Qual a diferença entre var, let e const?
/var: Escopo de função, permite reatribuição e redeclaração, sofre hoisting.
/let: Escopo de bloco, permite reatribuição, mas não redeclaração, sofre hoisting (temporal dead zone).
/const: Escopo de bloco, não permite reatribuição (mas permite alteração de objetos ou arrays), sofre hoisting (temporal dead zone).
//exemplos:
  
  // Usando var
var x = 10;
if (true) {
  var x = 20;  // Redeclara e reatribui x
}
console.log(x);  // 20

// Usando let
let y = 10;
if (true) {
  let y = 20;  // Não afeta a variável y fora do bloco
}
console.log(y);  // 10

// Usando const
const z = 10;
// z = 20;  // Erro: não pode reatribuir
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//13. O que acontece quando você tenta acessar uma variável que ainda não foi definida?

Com var: A variável é "elevada" e seu valor será undefined se você tentar acessá-la antes da atribuição.
Com let e const: A tentativa de acesso à variável antes da definição gera um erro de referência devido ao comportamento da "zona morta" (TDZ).
//exemplo var:
console.log(x); // undefined
var x = 10; 
//exemplo  let:
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
//exemplo const:
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//14. Como funciona o typeof? Escreva um código usando o typeof
O operador typeof é útil para identificar o tipo de uma variável ou valor em JavaScript.
Ele pode ser utilizado em tipos primitivos e objetos, mas apresenta um comportamento peculiar quando usado com null (ele retorna "object").

















  
