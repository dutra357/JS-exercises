class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falanto!`)
    }

    comer() {}

    beber() {}
}


const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.falar())