//Função do relógio na tela de login

function relogio() {
    let horario = document.getElementById('horas');
    let horalocal = new Date().toLocaleTimeString('pt-br');
    horario.innerHTML = horalocal;
};

//Função do login, com usuários e senhas

function login() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario === "server" && senha === "ser1970") {
        window.location = "registro_ponto.html";
    } else
    if (usuario === "admin" && senha === "ad1994") {
        window.location = "registro_ponto.html";
    } else
    if (usuario === "dev" && senha === "dev2002") {
        window.location = "registro_ponto.html";
    } else
    //alert("Usuário/Senha Incorreta!")

        Swal.fire({
        title: 'Usuário/Senha Incorreta!',
        icon: 'error',
        text: 'Digite novamente usuário/senha correta!',
        confirmButtonColor: '#1877f2',
    });

}

//Função do dia da semana, mês e ano na tela de login

setInterval(relogio, 100);

dayName = new Array("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "julho", "junho", "agosto", "setembro", "outubro", "novembro", "dezembro")
now = new Date

document.write("<h1>" + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + " </h1>")