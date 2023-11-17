import { Personagem} from "./personagem.js";

export class arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza

    static descricao = 'Fiquem firmes como a corda do arco!'

    constructor (nome, level, destreza) {
        super(nome, level)
        this. destreza = destreza
    }

    obterInsignia() {
        if(this.destreza >= 5){
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}