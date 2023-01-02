function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}


/*
 Função que busca um único elemento ou class 
'document.querySelector('.tecla_pom').onclick = tocaSomPom;'.
*/

// Referência para a função 'document.querySelectorAll('.tecla')'.
const listaDeTeclas =  document.querySelectorAll('.tecla')

// Chamando a referêcia 'listaDeTeclas' buscando o primeiro valor '[0]' e atribuindo '.onclick' e chamando a função 'tocaSomPom' para dar o play na musica.
listaDeTeclas[0].onclick = tocaSomPom