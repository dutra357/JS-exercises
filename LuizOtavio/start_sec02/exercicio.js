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
    p.className = 'teste'


    const time = document.createElement('p')

    const data = new Date('2024-04-22 15:06');
    time.innerHTML = data.getDate().toString();
    resultado.appendChild(time)

    time.style = 'color: blue'
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