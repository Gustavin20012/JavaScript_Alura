// Criar um botão que faz aparecer a lista
// Criar um segundo botão que faz com que a lista de cores volte a sumir

function ocultaTintas(){
    document.querySelector('.lista').classList.add('oculto');
    document.querySelector('.lista').classList.remove('revelado');
    console.log(document.querySelector('.lista').classList);
}
function mostraTintas() {
    document.querySelector('.lista').classList.add('revelado');
    document.querySelector('.lista').classList.remove('oculto');
    console.log(document.querySelector('.lista').classList)
}