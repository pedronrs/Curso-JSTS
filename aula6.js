const frutas = ['Pera' , 'Maça', 'Uva']; 

for(let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'luiz' ,
    sobrenome: 'otavio' ,
    idade: 30
}

for(let i in pessoa){
    console.log(i,pessoa[i]);
}

//estrutura  de repeticao for in

const nomes = ['Luiz otávio', 'cachorro','cavalo','perdizes'];


for(let value of nomes){
    console.log(value);
}


//estrutura forEach
nomes.forEach(function(el) {
    console.log(el);
})









// FOR IN - ITERAR SOBRE PROPRIEDADES DE UM OBJETO
 
//FOR OF - ITERAR SOBRE VALORES DE UM ARRAY OU STRING

//FOR EACH ???




//estrutura de repeticao for of


