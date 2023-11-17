import { arqueiro } from "./arqueiro.js";
import { mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'

    static descricao = 'Minha aljava nunca está cheia'

    constructor(nome, level, destreza, elementoMagico, levelMagico, Inteligencia) {
        super(nome, level)
        this.ladoArqueiro = new arqueiro(nome, level, destreza)
        this.ladoMago = new mago(nome, level, elementoMagico, levelMagico, Inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}