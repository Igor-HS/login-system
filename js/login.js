var listaDeFuncionarios = [{
    email: "emailum@mail.com",
    password: "123",
    name: "Joãozinho",
    phone_number: "(55) 99939-3993",
    role: "Desenvolvedor"
},{
    email: "emaildois@mail.com",
    password: "123",
    name: "Mariazinha",
    phone_number: "(53) 92329-3993",
    role: "Gerente"
},{
    email: "emailtres@mail.com",
    password: "123",
    name: "Terezinha",
    phone_number: "(23) 88379-3993",
    role: "Estagiário"
}];


verificadoSeOUsuarioEstaLogado();



function efetuaLogin(emailDigitado, senhaDigitada){

    var usuarioValido = listaDeFuncionarios.find(function(funcionario, indice){
        console.log(funcionario);
        return funcionario.email == emailDigitado && funcionario.password == senhaDigitada;
    })

    if(usuarioValido){
        salvarUsuario(usuarioValido);
        document.location = "listaDeUsuarios.html";
    }else{
        alert(`Email ou senha inválidos!`);
    }
    
}

//salvar user no local storage
function salvarUsuario(usuario){

    //transforma objeto em texto.
    var usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem('usuarioLogado', usuarioJSON)
}


function verificadoSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');

    if(usuarioLogado){
        document.location = "listaDeUsuarios.html";
    }
}


//O ideal é deixar apenas coisas que necessitam do JQuery dentro dessa função.
$(document).ready(function(){

$("#form-login").submit(function(event){
    //Parar o comportamento padrão do evento.
    event.preventDefault();

    var emailDigitado = $("#inputEmail").val();
    var senhaDigitada = $("#inputPassword").val();

    efetuaLogin(emailDigitado,senhaDigitada);
})


})