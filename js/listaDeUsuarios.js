function logout(){
    localStorage.removeItem('usuarioLogado');
    document.location = "login.html";
}

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

function preencheListaDeUsuarios(){

    var table = $("#users-table");

    listaDeFuncionarios.map(function(user, indexArray){

        table.find("tbody").append(`
            <tr>
                <td>${user.email}</td>
                <td>${user.name}</td>
                <td><a href="detalharUsuario.html?email=${user.email}">visualizar</a></td>
            </tr>
        `)})

}

verificadoSeOUsuarioEstaLogado();

$(document).ready(function(){

    mostraEmailUsuarioLogado();
    preencheListaDeUsuarios();


    $("#logout").click(function(){
        logout();
    })

})