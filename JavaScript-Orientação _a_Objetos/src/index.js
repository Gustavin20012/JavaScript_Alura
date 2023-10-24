import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { mago } from "./modules/mago.js";

const magoAntonio = new mago ('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new mago ('Julia', 8, 'gelo', 7, 10)

const personagens = [magoAntonio, magaJulia]

new PersonagemView(personagens).render()


console.log(new mago('gelo', 7, 9))

/*
Primeira linha de codigo 
     const personagemPedrinho = {
     nome: 'Pedrinho',
     vida: 7,
     mana: 12,
     level: 5,
     tipo: 'Mago',
}
 

    const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
 }


const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10, 
}
 
const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.level = 5

const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 3

console.log('Insignia de ' +personagemPedrinho.nome + ':' +personagemPedrinho.obterInsignia())
console.log('Insignia de ' +personagemJose.nome + ':' +personagemJose.obterInsignia())
*/


