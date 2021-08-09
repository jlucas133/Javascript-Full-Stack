class Spaceship{
    constructor(name, capacidadeMax, cargaAtual){
        this.name = name
        this.capacidadeMax = capacidadeMax
        this.cargaAtual = cargaAtual
    }

    percentCharge(){return (this.cargaAtual/this.capacidadeMax*100)}
}

export default Spaceship