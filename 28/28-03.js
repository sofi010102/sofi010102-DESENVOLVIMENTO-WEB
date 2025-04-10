const estudante ={
    nome: "Melissa",
    idade: 16,
    prontuario: 12345,
    bolsista: true,
    telefones: ["1234-5678", "8765-4321"] //,
    //endereco: {
    //    rua: "Nome da Rua",
    //    numero: "12",
    //    bairro: "Santa Cruz"
    //},
//{
//    rua:"Nova Rua",
//    numero: "10",
//    bairro: "Novo Bairro"
//}]
    
    console.log(estudante)
    console.log(estudante.endereco.rua)
    console.log(estudante.endereco.bairro)
}
console.log(typeof estudante) //verifica o tipo de dado = object
console.log(estudante)

console.log(estudante.idade)
console.log(estudante["idade"])

console.log(estudante.telefones)
console.log(estudante.telefones[0]) //telefone no índice [0]


//adicionar um obejto dentro de outro objeto
estudante.endereco= {
    rua: "Nome da Rua",
    numero: "12",
    bairro: "Santa Cruz"
}

console.log(estudante)
console.log(estudante.endereco.rua)
console.log(estudante.endereco.bairro)


//verificar se existe a propriedade endereço
cosnt chaveObjeto= Object.keys(estudante)
console.log("",chaveObjeto)

if (!chaveObjeto.includes("endereco")){ //se propriedade end não existe
    console.error("É necessário ter um endereço cadastrado") //mensagem de erro
}
else{
    console.log("Endereço Cadastrado")
}
