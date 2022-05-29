//Função botão sair

function sair() {

    Swal.fire({
        title: 'Voce deseja realmente sair?',
        showCancelButton: true,
        confirmButtonColor: '#1877f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "index.html";
        }
    })
}

//Função 1 botão bater o ponto na entrada do trabalho

function registrar1() {

    let horalocal = new Date().toLocaleTimeString('pt-br');
    let ponto_batido = document.getElementById(horalocal);
    let horario1 = document.getElementById('batida1');
    Swal.fire({
        title: 'Voce deseja bater a sua entrada de trabalho?',
        showCancelButton: true,
        confirmButtonColor: '#1877f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Ponto registrado ' + horalocal,
                'Não esqueça as próximas batidas de ponto do dia!.',
                'success',
                'confirmButtonColor: #1877f2',
                horario1.value = horalocal

            )
        } else
            Swal.fire({
                title: 'Você não confirmou o seu registrou seu ponto!',
                confirmButtonColor: '#1877f2'
            })
    })
}

//Função 2 botão bater o ponto na entrada do almoço

function registrar2() {

    let horalocal = new Date().toLocaleTimeString('pt-br');
    let ponto_batido = document.getElementById(horalocal);
    let horario1 = document.getElementById('batida2');
    Swal.fire({
        title: 'Voce deseja bater a sua entrada de trabalho?',
        showCancelButton: true,
        confirmButtonColor: '#1877f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Ponto registrado ' + horalocal,
                'Não esqueça as próximas batidas de ponto do dia!.',
                'success',
                horario1.value = horalocal
            )
        } else
            Swal.fire({
                title: 'Você não confirmou o seu registrou seu ponto!',
                confirmButtonColor: '#1877f2'
            })
    })
}

//Função 3 botão bater o ponto no retorno do almoço

function registrar3() {

    let horalocal = new Date().toLocaleTimeString('pt-br');
    let ponto_batido = document.getElementById(horalocal);
    let horario1 = document.getElementById('batida3');
    Swal.fire({
        title: 'Voce deseja bater a sua entrada de trabalho?',
        showCancelButton: true,
        confirmButtonColor: '#1877f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Ponto registrado ' + horalocal,
                'Não esqueça a ultima batida de ponto do dia!.',
                'success',
                horario1.value = horalocal
            )
        } else
            Swal.fire({
                title: 'Você não confirmou o seu registrou seu ponto!',
                confirmButtonColor: '#1877f2'
            })
    })
}

//Função 4 botão bater o ponto na saída do trabalho

function registrar4() {

    let horalocal = new Date().toLocaleTimeString('pt-br');
    let ponto_batido = document.getElementById(horalocal);
    let horario1 = document.getElementById('batida4');
    Swal.fire({
        title: 'Voce deseja bater a sua entrada de trabalho?',
        showCancelButton: true,
        confirmButtonColor: '#1877f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Ponto registrado ' + horalocal,
                'Parabéns, voce bateu todos os pontos do dia! Bom Descanso!',
                'success',
                horario1.value = horalocal
            )
        } else
            Swal.fire({
                title: 'Você não confirmou o seu registrou seu ponto!',
                confirmButtonColor: '#1877f2'
            })
    })
}