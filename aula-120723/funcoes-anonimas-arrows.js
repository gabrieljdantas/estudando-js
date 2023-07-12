// function somar(n1, n2) {
//     let soma = n1 + n2;
//     return soma;
// }

// function dividir(num, den){
//     if(den == 0)
//         return;
//     return (nun/den);
// }

// const num = dividir(22, 0);
// console.log(num)


//callback -> função que passado como parametro de outra função

// function erro(){
//     console.log("DEU RUIM")
// }

// function requisicaoParaBanco(callBackError) {
//     for (let i = 0; i < 10000000000; i++) { //Isso vai demorar alguns segundos
//         if (i === 10000000) {
//             callBackError();
//         }
        
//     }
// }

// requisicaoParaBanco(erro);

//Função Anonima

// function teste(){
//     console.log("Olá, Mundo!")
// }

// setTimeout(function() {
//     console.log("Olá, Mundo!")
// }, 3000);

//  setInterval(function() {
//      console.log("Olá, Mundo! com setInterval")
//  },2000);

//Arow Functions -> funções de seta

// setTimeout(function() {
//     console.log("SetTimeout com Função anonima")
// }, 2000)

// setTimeout(() => {
//     console.log("SetTimeOut com arrow function")
// }, 2000)

//parametros => escopo/intrução
// (resultado, requisicao) => {
//     console.log(resultado + " " + requisicao)
//     return 0;
// }

//Arrow function modo 1
teste((numero) => {
    return (numero * 2);
});

//modo 2 - sem parenteses no atributo

teste(numero => {
    return(numero * 2);
})

//modo 3 - sem parenteses, sem chaves e return

teste (numero => (numero * 2));
