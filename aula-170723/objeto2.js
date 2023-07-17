class Pessoa {
    nome
    idade
    email
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gabriel"
pessoa1.idade = 22
pessoa1.email = "gabriel@exemplo.com"


let objeto2 = {...pessoa1};
console.log(objeto2)