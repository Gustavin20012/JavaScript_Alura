/*  Criação da classe Personagem, que consiste em padronoizar alguns atributos dos perssonagens.
    Atributos padrões são: nome, vida, mana, level, tipo, descrição
*/
export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor (nome, level) {
        this.nome = nome
        this.level = level
    }
//  Criação da função obterInsignia
    obterInsignia(){
        if (this.level >= 5){
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} Iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2) {
            return 'Empate!'
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor !`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor !`
    }
}
