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
        $("#form-login-alert-error").css('display', 'block');

        //seta que após 5segs a msg de erro some novamente.
        setTimeout(function(){
            $("#form-login-alert-error").css('display', 'none');
        }, 5000);

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