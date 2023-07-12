//Trabalhando com condicionais
console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array (
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);
console.log("Destinos possíveis: ", listaDeDestino);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

/*
if (idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestino.splice(1,1); //Remover elemento
}else if (estaAcompanhada) {
        console.log("Comprador está acompanhado(a)");
        listaDeDestino.splice(1,1) //Remover elemento
} else {
        console.log("Comprador menor de idade")
}
*/
if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log(`Embarque para: \n${listaDeDestino.pop(2)}\n`);
    listaDeDestino.splice(2,1); //Remover elemento
}else{
    console.log("Comprador menor de idade");
}

if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}
