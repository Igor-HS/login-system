function mostrarDadosDoUsuario(){

    //pegar parametros no url
    var searchParams = new URLSearchParams(window.location.search); 
    var emailDoUsuario = searchParams.get('email');
    
    var UsuarioEncontrado = listaDeFuncionarios.find(function(usuario, indiceNoArray){
        return usuario.email == emailDoUsuario;
    })

    if(UsuarioEncontrado){
        $('#nome').html(UsuarioEncontrado.name);
        $('#email').html(UsuarioEncontrado.email);
        $('#telefone').html(UsuarioEncontrado.phone_number);
        $('#cargo').html(UsuarioEncontrado.role);

    }else{
        alert("E-mail inválido, por favor tente novamente!");
        document.location = 'listaDeUsuarios.html';
    }
}


$(document).ready(function(){

    mostrarDadosDoUsuario();


})