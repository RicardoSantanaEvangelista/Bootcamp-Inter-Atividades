function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade !`
};


const pessoa1 = {
    nome: "João",
    idade: 24,
};

const pessoa2 = {
    nome: "Lara",
    idade: 20,
};

const pessoa3 = {
    nome: "Luiza",
    idade: 22,
};

const pessoa4 = {
    nome: "Bruno",
    idade: 26,
};

const pessoa5 = {
    nome: "João Ricardo",
    idade: 25,
};


console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.apply(pessoa2, [8]));