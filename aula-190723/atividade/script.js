const btnVermelho = document.querySelector("#vermelhoButton")
const btnVerde = document.querySelector("#verde")
const btnAmarelo = document.querySelector("#amarelo")
const btnAuto = document.querySelector("#auto")

const semaforo = document.querySelector("#semaforo")

const imagens = [
    "imagens/vermelho.png",
    "imagens/amarelo.png",
    "imagens/verde.png",
];

let indice = 0;
let interval;

btnVerde.addEventListener("click", () => {
    clearInterval(interval)
    semaforo.src = imagens[2];
    console.log("Chegou")
});

btnAmarelo.addEventListener("click", () => {
    clearInterval(interval)
    semaforo.src = imagens[1];
});

btnVermelho.addEventListener("click", () => {
    clearInterval(interval)
    semaforo.src = imagens[0];
});

btnAuto.addEventListener("click", () => {
    interval = setInterval(() => {
        semaforo.src = imagens[indice];
        if (indice == (imagens.length-1)) {
            indice = 0;
        }
        else{
            indice++
        }
    }, 2000)
})