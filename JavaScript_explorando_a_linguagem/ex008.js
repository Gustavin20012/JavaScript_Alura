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
while(contador < tamanhoDaLista){
    if (listaDeDestino[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }
    contador++;
}
