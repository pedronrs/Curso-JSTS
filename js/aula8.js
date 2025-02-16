const num = [1,2,3,4,5,6,7,8,9];
for (let numero of num){
    if (numero === 2 || numero === 5){
        continue; // pula a execucao do laço e vai para a próxima iteração
    }
    console.log(numero);

    if(numero === 7){
        console.log(`${numero} encontrado`);
        break; //interrompe o laço a partir do momento que atende a condição
    }
}



    
