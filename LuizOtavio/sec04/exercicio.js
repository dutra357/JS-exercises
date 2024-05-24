// const func = function umaFunc() {
//     console.log('executada');
//     console.log(arguments[0])

// }

// func("teste")

let entrada = function entrada(valor1){
    function interna(valor2){
        return valor1 + valor2;
    }
    return interna;
}

const primeira = entrada(5);
const segunda = primeira(2);

console.log(segunda)