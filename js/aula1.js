
// funcoes


function meuEscopo(){
    const form = document.querySelector('#form');
    form.onsubmit = function(evento){
        alert(1);
    }
}
meuEscopo();







function factory_Pessoa(nome, email, senha){
    let pessoa = {
        nome: nome,
        email: email,
        senha: senha
    }
    return pessoa;
}



function send_data(){
    console.log("enviando dados");
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let pessoa = factory_Pessoa(nome, email, senha);
    console.log(pessoa);
    console.log("dados enviados");
}

