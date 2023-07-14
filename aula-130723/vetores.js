//Vetores - Arrays

// let nota = 9.6;
let notas = [6.5, 7.8, 9];
let times = ["Botafogo", "Corinthians", "Palmeiras", "Santos"];
let ativados = [true, false, false, true];

console.log(times.length);


// //Vetor de funções
// let operacoes = [
//     (n1, n2) => n1 + n2,
//     (n1, n2) => n1 - n2,
//     (n1, n2) => n1 * n2,
//     (n1, n2) => n1 / n2
// ]

// console.log(operacoes[2](2,3));

//for each of -> itera sobre os vetores
for(let nota of notas){
    console.log(nota);
}

//For each in-> atraves do indice
for(let i in notas){
    console.log(i)
    console.log(notas[i])
}
