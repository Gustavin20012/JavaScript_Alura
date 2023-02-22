// document.querySelector("#Robotron") realiza a busca dentro do HTML pelo ID '#Robotron'
const robotron = document.querySelector("#Robotron")
// Essa busca é adicionada a constante (const robotron)

// .addEventListener("click", dizOi) é uma função que tem seu primeiro paramêtro o click e o segundo a chamada da função (dizOi)
robotron.addEventListener("click", dizOi)

/* 
Função dizOI tem como objetivo amarzenar o comando (console.log('oi')) para que seja executado somente quando for clicado no elemento que está sendo buscado pelo document.querySelector("#Robotron")
*/
function dizOi() {
    console.log('oi')
}