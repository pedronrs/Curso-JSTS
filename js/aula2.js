const data = new Date(); //Date é uma função construtora, por isso o uso do new antes de chamar a função. Sendo também a primeira letra maiúscula
console.log('Dia', data.getDate()); //getDate é um método da função Date que retorna o dia do mês
console.log('Mês', data.getMonth()+1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log(data.toString());

