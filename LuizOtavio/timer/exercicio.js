const contador = document.querySelector('#contador');
const start = document.querySelector('#button1')
const pause = document.querySelector('#button2')
const zerar = document.querySelector('#button3')

let segundos = 0;


//No formulário pega o SUBMIT, já para botãoo CLICK
start.addEventListener('click', function(e){

    zerarContador();
    setInterval(time(), 1000);
})

zerar.addEventListener('click', function(e){
    e.preventDefault();
    zerarContador();
})

pause.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Pausado!')
})




function getTimeSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciaRelogio(){
    const timer = setInterval(function() {
        segundos++;
        contador.innerHTML = segundos;
    }, 1000)
}



function time(){
    const date = new Date();

    contador.innerHTML = date;
}

function zerarContador(){
    contador.innerHTML = '00:00:00';
}
