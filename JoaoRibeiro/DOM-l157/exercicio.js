// //Aula 157
// let elemento = null;

// elemento = document.documentElement;

// console.log(elemento.lang);
// console.log(typeof(elemento))

// elemento2 = document.head;
// console.log(elemento2);
// //------


// //158
// //console.log(document.getElementById("h1_id").textContent)

// let e = document.getElementsByTagName('p')
// //e[0].innerText = "Nova Notícia"
// console.log(e)


//160
//Query selector - usa seletores de CSS

let e = document.querySelectorAll('p')

setTimeout(() => {
    console.log("Teste de timeout")
}, 2000)