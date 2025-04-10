//Complete o código abaixo para criar um objeto carro com as propriedades marca, modelo e ano. Depois, exiba essas propriedades no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log(carro.marca);   // Saída: Toyota
console.log(carro.modelo);  // Saída: Corolla
console.log(carro.ano);     // Saída: 2022
// divisor dos codigos ....................................................................................

//Remova a propriedade email do objeto usuario e depois exiba o objeto para verificar.
const usuario = {
    nome: "Fernanda",
    email: "fernanda@email.com",
    idade: 25
};

// Removendo a propriedade 'email'
delete usuario.email;
console.log(usuario);  // Saída: { nome: "Fernanda", idade: 25 }
// divisor dos codigos ...................................................................................

//Complete o código para alterar a idade da pessoa para 31 anos e depois exiba a nova idade.
const pessoa = {
    nome: "Carlos",
    idade: 29
};

// Alterando a idade
pessoa.idade = 31;
console.log(pessoa.idade);  // Saída: 31
// divisor dos codigos ......................................................................................

