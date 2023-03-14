// document.querySelector("#Robotron") realiza a busca dentro do HTML pelo ID '#Robotron'
// const robotron = document.querySelector("#Robotron")
// Essa busca é adicionada a constante (const robotron)

// .addEventListener("click", dizOi) é uma função que tem seu primeiro paramêtro o click e o segundo a chamada da função (dizOi)
// robotron.addEventListener("click", dizOi)

/* 
Função dizOI tem como objetivo amarzenar o comando (console.log('oi')) para que seja executado somente quando for clicado no elemento que está sendo buscado pelo document.querySelector("#Robotron")
*/

/*
function dizOi() {
    console.log('oi')
}
*/


// Aqui são armazenado as constantes que localiza os elementos no HTML pelo Id
const subtrair = document.querySelector("#subtrair")
const somar =  document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( () => {
    elemento.addEventListener("click", () => {
        console.log()
    })
})

// Funções que mostra a subtrações do elemento braco ao ser clicado
somar.addEventListener("click", () => {manipulaDados("somar")})

subtrair.addEventListener("click", (evento) =>{manipulaDados ("subtrair")})

function manipulaDados (operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}