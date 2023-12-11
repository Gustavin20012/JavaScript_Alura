// Impotações de diversas classes de personagens 
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { mago } from "./modules/mago.js";
import { arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

// Criação dos personagens Magos
const magoAntonio = new mago ('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new mago ('Julia', 8, 'gelo', 7, 10)
const magaIsa = new mago ('Isabella', 10, 'gelo', 10, 10) 

// Criação dos personagens Arqueiros
const arqueiroBruno = new arqueiro ('Bruno', 8)
const arqueiroPedro = new arqueiro ('Pedro', 3)

// Criação dos personagens ArqueirosMagos um tipo de pessonagem que tem as habilidades de um arqueiro e mago juntas
const arqueiromagoChico = new ArqueiroMago ('Chico', 7, 10, 'ar', 4, 8)

// Criação dos personagens Cavaleiros
const guerreiroJorge = new Guerreiro('Jorge', 8);

// Array dos personagens, ultilizado para armazenar os novos personagens
const personagens = [magaIsa, arqueiroBruno, arqueiroPedro, arqueiromagoChico, guerreiroJorge]


// (PersonagemView) é ultilizado para exibir os personagens que foram armazenado na variavel (personagens)
new PersonagemView(personagens).render()

// Verificação de personagens vencedores
console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))


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
personagemPedrinho.static tipo = 'Mago'
personagemPedrinho.level = 5

const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.static tipo = 'Arqueiro'
personagemJose.level = 3

console.log('Insignia de ' +personagemPedrinho.nome + ':' +personagemPedrinho.obterInsignia())
console.log('Insignia de ' +personagemJose.nome + ':' +personagemJose.obterInsignia())
*/


