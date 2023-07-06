console.log("Atribuição de Variaveis");

/*
var
    a variável var é declarada e iniciada no escopo da função
    não respeitando bloco e permitindo a redeclaração e reatribuição.

let
    a variável let é declarada no escopo da função, mas só é inicializada posteriormente
    respeitando bloco e permitindo reatribuição, mas não permite a redeclaração.

const
    a variável const é declarada no escopo da função, mas só é inicializada posteriormente
    respeitando bloco e não permitindo reatribuição nem redeclaração.

OBS 1: Ao declarar uma variável sem o var, sem o let ou sem o const, ela é criada no escopo global.
*/

/* 
    No exemplo do (for) é ultilezado o (let x) que seu valor foi declado (x = 0), mas esse valor é reatribuido 9 vezes pelo contador.

    Nesse mesmo exemplo a varivel x está respeitando o bloco, caso eu venha chamar ela fora do bloco seria uma nova variavel.
*/

for(let x = 0; 10 >= x; x++){
    console.log(x);
}

const primeiroNome = "Gustavo";
const sobrenome = "Lima";


//console.log(nome + " " + sobrenome);
console.log(primeiroNome , sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`)


let contador = 0
contador = contador +1

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declaração de variavel
idade = 26; //atribuindo valor
