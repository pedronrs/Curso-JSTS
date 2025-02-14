const pessoa = {
    nome: 'Luiz',
    sobrenome: 'miranda' ,
    idade: 19,
    endereco: {
        rua: 'Augusto Cesar',
        numero: 325,
        complemento: 'Perto da esquina da posse'
    }
}
//atribuição por desestruturação
const {nome, idade, sobrenome,endereco:{complemento}} = pessoa;
console.log(complemento);










//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO - OBJETOS