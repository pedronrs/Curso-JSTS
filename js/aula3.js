const data = new Date();
const diaSemana = data.getDay();
switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    
    case 1:
        console.log('Segunda-feira');
        break;
    
    case 2:
        console.log('Terça-feira');
        break;

    case 3:
        console.log('Quarta-feira');
        break;
    
    case 4:
        console.log('Quinta-feira');
        break;
    
    case 5:
        console.log('Sexta-feira');
        break;
    
    case 6:
        console.log('Sábado');
        break;
}


//obs de outras aulas - Let tem escopo de bloco e Var tem escopo de função


// Variáveis declaradas com var dentro de uma função não podem ser acessadas fora da função
// Variáveis declaradas com let dentro de um bloco não podem ser acessadas fora do bloco