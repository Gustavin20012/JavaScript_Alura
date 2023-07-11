//Trabalhando com condicionais
console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array (
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);
console.log("Destinos possíveis: ", listaDeDestino);

const idadeComprador = 10;
const estaAcompanhada = true;

if (idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestino.splice(1,1); //Remover elemento
}else if (estaAcompanhada) {
        console.log("Comprador está acompanhado(a)");
        listaDeDestino.splice(1,1) //Remover elemento
} else {
        console.log("Comprador menor de idade")
}

console.log(listaDeDestino);
