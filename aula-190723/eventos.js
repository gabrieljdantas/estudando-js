const quadrado = document.querySelector("#quadrado");


quadrado.onclick = () => {
    quadrado.style.backgroundColor = "#003049"
}

quadrado.ondblclick = () => {
    quadrado.style.borderRadius = "100px";
    quadrado.style.backgroundColor = "#0d63cb"
}

function changeColorSquare() {
    quadrado.style.backgroundColor = "#2f93ff"
}

quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "red"
});


console.log({quadrado});