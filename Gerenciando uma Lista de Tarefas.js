//Desafio: Gerenciando uma Lista de Tarefas (JavaScript)

//Você está criando um pequeno sistema de gerenciamento de tarefas usando JavaScript.
//Complete o código abaixo utilizando os métodos de array apropriados.

//let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];

// 1. Adicione as tarefas 'Comprar pão' e 'Ler um livro' ao final da lista
/tarefas.__________('Comprar pão', 'Ler um livro');
R:
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];

// 1. Adicionando as tarefas 'Comprar pão' e 'Ler um livro' ao final da lista
tarefas.push('Comprar pão', 'Ler um livro');

console.log(tarefas);  // Saída: ['Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão', 'Ler um livro']
//divisor de codigo...................................................................................................................................

// 2. Remova a última tarefa da lista e armazene em uma variável chamada ultimaTarefa
/let ultimaTarefa = tarefas.__________();
R:
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão', 'Ler um livro'];

// 2. Removendo a última tarefa e armazenando na variável ultimaTarefa
let ultimaTarefa = tarefas.pop();

console.log(ultimaTarefa);  // Saída: 'Ler um livro'
console.log(tarefas);       // Saída: ['Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão']
//divisor de codigo........................................................................................................................................

// 3. Adicione 'Acordar cedo' e 'Tomar café' no início da lista
/tarefas.__________('Acordar cedo', 'Tomar café');
R:
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão'];
// 3. Adicionando 'Acordar cedo' e 'Tomar café' no início da lista
tarefas.unshift('Acordar cedo', 'Tomar café');
console.log(tarefas);  // Saída: ['Acordar cedo', 'Tomar café', 'Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão']
//divisor de codigo.......................................................................................................................................

// 4. Remova a primeira tarefa da lista e salve em uma variável chamada primeiraTarefa
/let primeiraTarefa = tarefas.__________();
R:
let tarefas = ['Acordar cedo', 'Tomar café', 'Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão'];

// 4. Removendo a primeira tarefa e armazenando na variável primeiraTarefa
let primeiraTarefa = tarefas.shift();

console.log(primeiraTarefa);  // Saída: 'Acordar cedo'
console.log(tarefas);         // Saída: ['Tomar café', 'Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão']
//divisor de codigo............................................................................................................................................

// 5. Substitua as duas primeiras tarefas por 'Fazer café da manhã' e 'Organizar a mesa'
/tarefas.__________(0, 2, 'Fazer café da manhã', 'Organizar a mesa');
R:
let tarefas = ['Tomar café', 'Estudar', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão'];

// 5. Substituindo as duas primeiras tarefas
tarefas.splice(0, 2, 'Fazer café da manhã', 'Organizar a mesa');

console.log(tarefas);  // Saída: ['Fazer café da manhã', 'Organizar a mesa', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão']
//divisor de codigo.........................................................................................................................................

// 6. Crie um novo array com as tarefas da posição 1 até 3 (inclusive 3)
/let tarefasSelecionadas = tarefas.__________(1, 4);
R:
let tarefas = ['Fazer café da manhã', 'Organizar a mesa', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão'];

// Criando um novo array com as tarefas da posição 1 até 3 (inclusive 3)
let tarefasSelecionadas = tarefas.slice(1, 4);

console.log(tarefasSelecionadas);  // Saída: ['Organizar a mesa', 'Lavar a louça', 'Fazer exercícios']
//divisor de codigo.........................................................................................................................................

// 7. Crie uma nova lista que combine as tarefas atuais com ['Ver um filme', 'Descansar']
/let tarefasCompletas = tarefas.__________(['Ver um filme', 'Descansar']);

/console.log("Lista original de tarefas:", tarefas);
/console.log("Última tarefa removida:", ultimaTarefa);
/console.log("Primeira tarefa removida:", primeiraTarefa);
/console.log("Tarefas selecionadas:", tarefasSelecionadas);
/console.log("Lista final de tarefas:", tarefasCompletas);

R:
let tarefas = ['Fazer café da manhã', 'Organizar a mesa', 'Lavar a louça', 'Fazer exercícios', 'Comprar pão'];
let ultimaTarefa = tarefas.pop();  // Removendo a última tarefa
let primeiraTarefa = tarefas.shift();  // Removendo a primeira tarefa
let tarefasSelecionadas = tarefas.slice(1, 4);  // Selecionando tarefas de posição 1 até 3

// 7. Combinando as tarefas atuais com ['Ver um filme', 'Descansar']
let tarefasCompletas = tarefas.concat(['Ver um filme', 'Descansar']);

console.log("Lista original de tarefas:", tarefas);
console.log("Última tarefa removida:", ultimaTarefa);
console.log("Primeira tarefa removida:", primeiraTarefa);
console.log("Tarefas selecionadas:", tarefasSelecionadas);
console.log("Lista final de tarefas:", tarefasCompletas);

