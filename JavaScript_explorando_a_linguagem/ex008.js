//Trabalhando com loops
console.log(`\nTrabalhando com condicionais e loops`);

const listaDeDestino = new Array (
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
);
console.log("\nDestinos possíveis: ", listaDeDestino);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

//Nessa variavel (tamanhoDaLista) eu ultilizei o (.length) que vai varrer toda a variavel (listaDeDestino) e armazenar o valor em (tamanhoDaLista), assim mesmo que eu colocar mais cidades na listaDeDestino ela irá aumentar junto com a (tamanhoDaLista).
let tamanhoDaLista = listaDeDestino.length
console.log(`tamanho da lista ${tamanhoDaLista}`);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//Aqui criamos uma variavel para contador que vai contar item por item na listDeDestino
let contador = 0;
let destinoExite = false;
while(contador < 3){
    
    if (listaDeDestino[contador] == destino) {
        destinoExite = true;
    } 
    contador++;
}
console.log("Destino existe: ", destinoExite);

if(podeComprar && destinoExite){
    console.log("Boa Viagem");
}else{
    console.log("Desculpa tivemos um erro!");
}

for(let cont = 0 ;cont <3; cont++){
    
    if (listaDeDestino[contador] == destino) {
        destinoExite = true;
        break;
    } 
}