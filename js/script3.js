//Array dos usuários e dos nomes de usuarios

const usuarios = [];
usuarios[0] = "server";
usuarios[1] = "admin";
usuarios[2] = "dev";
let codigo1 = "7070";
let codigo2 = "9494";
let codigo3 = "0202";
let usuario_server = usuarios[0];
let usuario_admin = usuarios[1];
let usuario_dev = usuarios[2];

const nomes_usuarios = [];
nomes_usuarios[0] = "Server Smith Taylor";
nomes_usuarios[1] = "Admin Johnson Scott";
nomes_usuarios[2] = "Dev Davis Wilson";

//Alert para confirmar o usuário fez o login

do {
    var senha = prompt("Por favor, confirme seu usuário:");
    var codigo = prompt("Digite o PIN de acesso:")
    if ((senha === usuario_dev && codigo === codigo3) || (senha === usuario_server &&
            codigo === codigo1) || (senha === usuario_admin && codigo === codigo2)) {
        alert("Entrando no sistema...")
        break
    } else
        alert("Usuário ou código incorreto ou inexistente, faça a confirmação novamente!")
}
while ((senha != usuario_server && codigo != codigo1) || (senha != usuario_dev &&
        codigo != codigo2) || (senha != usuario_admin && codigo != codigo3));