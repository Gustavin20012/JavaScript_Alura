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
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} Iniciante`
    }
}
