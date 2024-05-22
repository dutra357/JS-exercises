const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let string = e.target.querySelector('#input01').value;
    resultado(string)
})

function resultado (msg) {
    const resultado = document.querySelector('#box2');

    const p = document.createElement('p')
    p.innerHTML = msg
    resultado.appendChild(p)
}