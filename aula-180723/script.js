// window.document

let h1 = document.getElementById("titulo");
console.log(h1)

let p = document.getElementsByClassName("paragrafo");

let b = document.getElementsByTagName("b");

let campoEmail = document.querySelector("input[type=email]");

let negritoParagrafo = document.querySelector("p b")
let negritosParagrafos = document.querySelectorAll("p b")
let paragrafo = document.querySelector("p")

// h1.title = "title"
// h1.style.color = "blue"
// h1.style.fontSize = "30px"

console.log(campoEmail)
console.log(paragrafo.innerText)
paragrafo.innerHTML = "Hoje na aula de JavaScript conversamos sobre DOM"
console.log(paragrafo.innerHTML)
console.log(negritosParagrafos)


//Uso de classes com JS

let caixa = document.querySelector("#informe");
caixa.classList.add("erro");

console.log(caixa)