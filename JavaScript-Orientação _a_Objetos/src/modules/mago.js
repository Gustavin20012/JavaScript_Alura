// impotação da classe personagem já que ela tem os atributos padrões para criações de um novo perssonagem
import { Personagem } from "./personagem.js"

// (export class mago  extends Personagem) -> aqui eu estou estendendo minha classe mago que foi criada até a classe Personagem -> Isso é herança
export class mago  extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'

/*  (constructor) é um metodo que é criado e iniciar um objeto
    Ele recebe os valores da calsse através dos ([Argumentos]):
    constructor (nome, level, elementoMagico, levelMagico, inteligencia) -> argumentos são os que estão dentro de "(argumentos)"
*/
    constructor (nome, level, elementoMagico, levelMagico, inteligencia) {
// o (super) é ultilizado para pegar alguns atributos da classe (Personagem)
        super(nome, level)
//  (this) é complicado de explicar
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

/*  Por está utilizando herança conseguimos acessar as funções dentro da classe (Perssonagem) 
    E aqui estamos modificando a função obterInsignia para a necessidade da classe mago
*/
    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}