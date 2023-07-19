//Date -> Data é o objeto que facilita o uso de data com o JS
let data = new Date(); //Criar um objeto com base no tempo do sistema
console.log(data.toLocaleTimeString())

let agora = Date.now(); // O tempo atual em milesegundos
let dezMin = 1000 * 60 * 10;
let daquiPouco = agora + dezMin;
console.log(new Date(daquiPouco))

console.log(new Date(2021, 12-1, 7).toLocaleDateString())


const btn = document.querySelector("#enviar")

btn.addEventListener("click", () =>{
    const data = document.querySelector("#dataNasc")
    const valor = data.value
    console.log(valor)
})