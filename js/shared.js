function verificadoSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        document.location = "login.html";
    }
}

function mostraEmailUsuarioLogado(){

    var usuarioLogado = localStorage.getItem('usuarioLogado');

    var usuarioLogadoObecjt = JSON.parse(usuarioLogado);

    $("#userLogged").html(usuarioLogadoObecjt.email);
}

function logout(){
    localStorage.removeItem('usuarioLogado');
    document.location = "login.html";
}

verificadoSeOUsuarioEstaLogado();

$(document).ready(function(){

    mostraEmailUsuarioLogado();

    $("#logout").click(function(){
        logout();
    })

})