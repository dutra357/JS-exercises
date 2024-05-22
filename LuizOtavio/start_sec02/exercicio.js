const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let string = e.target.querySelector('#input01').value;
    resultado(string)
})



function resultado (msg) {
    console.log(teste)

    const resultado = document.querySelector('#box2');
    const p = document.createElement('p')
    p.innerHTML = msg

    resultado.appendChild(p)
    p.className = 'teste'


    const time = document.createElement('p')

    const data = new Date('2024-04-22 15:06');
    time.innerHTML = data.getDate().toString();
    resultado.appendChild(time)

    time.style = 'color: blue'
}

//let atual = new Date();

//console.log(atual.toLocaleTimeString() + " " + atual.toDateString())


// let numeros = [1, 2, 3]

// let [a, b, c] = numeros


const objeto = {
    nome: "Fulano de tal",
    endereco: {
        rua: 'Rua da silva',
        numero: "numero 124",
        cep: 88030011
    }
}
console.log(objeto.endereco);