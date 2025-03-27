// exercicio 1

const humanas = ['joao', 'leticia']
const exatas = ['amanda', 'paulo']

const uniao = humanas.concat(exatas)
console.log(uniao)

//execicio 2 

const numeros = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10]
console.log (numeros)
 const parteNumeros = numeros.slice(3,8)
 console.log(parteNumeros)

 //exercicio 3

 const frutas =['maça', 'Banana', 'laranja', 'limao', 'abacaxi']
 frutas.splice(1, 2, 'kiwi', 'Pessego')
 console.log(frutas)

 //exercicio 4
 const menuPrincipal = ['Feijoada', 'Churrasco', 'Frango', 'arroz'];
 const menuDeSobremesas = ['Pudim', 'Bolo', 'Sorvete', 'Torta'];
 const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
 console.log(menuCompleto);
