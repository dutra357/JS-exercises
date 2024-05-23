const contador = document.querySelector('#contador');
const start = document.querySelector('#button1')
const pause = document.querySelector('#button2')
const zerar = document.querySelector('#button3')

start.addEventListener('click', function(e){
    e.preventDefault();
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


function time(){
    const date = new Date(0);

    contador.innerHTML = date;
}

function zerarContador(){
    contador.innerHTML = '00:00:00';
}
