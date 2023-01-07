/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
// Chamando a referêcia 'listaDeTeclas' buscando o primeiro valor '[0]' e atribuindo '.onclick', e chamando a função 'tocaSomPom' para dar o play na musica.

(listaDeTeclas[0].onclick = tocaSomPom;)
*/

/*
 Função que busca um único elemento ou class 
'document.querySelector('.tecla_pom').onclick = tocaSomPom;'.
*/

// Referência para a função 'document.querySelectorAll('.tecla')'.
// const listaDeTeclas =  document.querySelectorAll('.tecla')

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Referências
const listaDeTeclas = document.querySelectorAll('.tecla');



//enquanto
for (let contador=0; contador < listaDeTeclas.length; contador++) {
    //Referências
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //Referência tratando-se de template string (`#som_${instrumento}`).
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    //console.log(contador);
}