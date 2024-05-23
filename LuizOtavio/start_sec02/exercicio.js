const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let primeiro = e.target.querySelector('#input01').value;
    let segundo = e.target.querySelector('#input02').value;
    
    //resultado(primeiro)
    multiplica(primeiro, segundo)
})



function resultado (msg) {
    const resultado = document.querySelector('#box2');
    const p = document.createElement('p')
    p.innerHTML = msg

    resultado.appendChild(p)
    p.className = 'teste'


    const time = document.createElement('p')

    const data = new Date();

    //cálculo de idade - tempo em JS
    const nascimento = new Date(1984, 9, 10)
    let result = data.getTime() - nascimento.getTime();
    let dif = Math.floor(result / (1000 * 60 * 60 * 24 * 365.25))
    time.innerHTML = dif //data.getHours();


    resultado.appendChild(time)

    time.style = 'color: blue'
}

function multiplica(a, b) {
    const resultado = document.querySelector('#box2');
    const p = document.createElement('p');
    p.innerHTML = a * b;

    resultado.appendChild(p)
    p.style = 'color: blue'
}

//let atual = new Date();


//console.log(atual.toLocaleTimeString() + " " + atual.toDateString())


// let numeros = [1, 2, 3, 4, 5, 6]

// const pessoa = {
//     nome: "teste",
//     endereco: {
//         rua: "rua joao da silva",
//         cep: 889008
//     }
// }

// pessoa.forEach((elemento)=>{
//     console.log(elemento)
// })

// NODE_LIST não é um array, mas se comporta de maneira similar
// "getComputedStyle" -> pega o elemento de estilo de um elemento do body