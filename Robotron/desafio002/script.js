const calcular = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado");

calcular.addEventListener("click", enviar)

function enviar() {
    resultado.innerHTML = "Fui clicado"
}