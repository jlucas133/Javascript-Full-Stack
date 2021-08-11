class Spaceship{
    constructor(name, capacidadeMax, cargaAtual, shield){
        this.name = name
        this.capacidadeMax = capacidadeMax
        this.cargaAtual = cargaAtual
        this.shield = shield
    }

    percentCharge(){return (this.cargaAtual/this.capacidadeMax*100)}
}

export default Spaceship