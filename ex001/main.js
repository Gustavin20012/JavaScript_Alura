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

function tocaSom(seletorAudio) {
    // Quantando a busca do 'document.querySelector(seletorAudio)' em uma constante chamada 'elemento'.
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento === 'audio') {
            elemento.play();
    }
    else {
        //alert('Elemeto não encontrado')
        console.log ('Elemento não encontrado ou Seletor não encontrado')
    }
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

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    /*
        Adicionado função que verifica a tecla Enter e Space caso seja precionada.
    */
    tecla.onkeydown = function(evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
    /*
    Usando a função (.add) para adicionar uma classe.
    tecla.classList.add('ativa')
    Aqui estamos acessando a lista de classe do ('tecla') e através da função (.add) estamos adicionando a classe ('ativa'). 
    */
   // onkeydown -> é uma função que verifica quando a tecla estiver em baixo ou melhor precionada.
    /*
        tecla.onkeydown = function() {
        tecla.classList.add('ativa')
        }
    */
    /*
    Usando a função (.remove) para remover uma classe.
    tecla.classList.remove('ativa')
    Aqui estamos acessando a lista de classe do ('tecla') e através da função (.remove) estamos removendo a classe ('ativa'). 
    */
    // onkeyup -> é uma função que verifica quando uma tecla estiver em cima ou melhor não precionada.
    /*    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
        }
    */ 

    //console.log(contador);
}