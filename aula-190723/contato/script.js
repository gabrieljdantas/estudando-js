const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");

function validarEmail() {
    const valor = email.value;
    if(valor.includes('@')){
        email.style.borderColor = "green"
    }
    else {
        email.style.borderColor = "red"
    }
    
}

function validarCampoVazio(evento) {
    const campo = evento.target;
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    }
    else {
        campo.style.borderColor = "green";
    }
}

function validarCampoVazio2(evento) {
    const campo = evento.target;
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    }
    else {
        campo.style.borderColor = "#767676";
    }
}
    

// email.addEventListener("keyup", validarEmail);

// for(let campo of campos){
//     campo.addEventListener("keyup", validarCampoVazio);
// }

for(let campo of campos){
    campo.addEventListener("blur", validarCampoVazio2);
}


