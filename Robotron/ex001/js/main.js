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


/* Aqui são armazenado as constantes que localiza os elementos no HTML pelo Id
const subtrair = document.querySelector("#subtrair")
const somar =  document.querySelector("#somar")
const braco = document.querySelector("#braco")
*/

// (const controle) faz a busca pela class ".controle-ajuste" e amarzena em "controle"
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// Funções que mostra a subtrações do elemento braco ao ser clicado
function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    console.log()

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}