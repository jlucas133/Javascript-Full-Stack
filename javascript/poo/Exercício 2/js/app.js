class App{
    constructor(){
        this.spaceship = null
    }

    start(){
        this.register()
        let chosenOption
        do{
            chosenOption = this.showMenu()
            this.redirectFeature(chosenOption)
        }while(chosenOption!='3')
        this.printAndExit()
    }
    register(){
        let nome = prompt('Digite o nome da nave')
        let crewQuantity = prompt('Digite a quantidade de tripulantes da nave')
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind=='1'){
            let weaponsQuantity = Number(prompt('Quantas armas a nave tem disponível?'))
            this.spaceship = new BattleSpaceship(nome, crewQuantity, weaponsQuantity)
        }else if(spaceshipKind=='2'){
            let seatQuantity = Number(prompt('Quantos lugares a nave comporta?'))
            this.spaceship = new TransportSpaceship(nome, crewQuantity, seatQuantity)
        }
    }
    askForSpaceshipKind(){
        let chosenOption
        while(!['1','2'].includes(chosenOption)){
            chosenOption = prompt('Qual o tipo da nave?\n1- Batalha\n2- Transporte')
        }
        return chosenOption
    }
    showMenu(){
        const promptMessage = 'O que deseja fazer?\n1-Acelerar a nave\n2-Trocar a nave\n3-Imprimir e sair'
        let chosenOption = prompt(promptMessage)
        while(!['1','2','3'].includes(chosenOption)){
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption){
        switch(chosenOption){
            case '1':
                this.accelerateSpaceship()
                break
            case '2':
                this.register()
                break
        }
    }

    accelerateSpaceship(){
        let acceleration = Number(prompt('Qual a aceleração?'))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit(){
        alert(
            this.spaceship.name + ' (' + this.spaceship.crewQuantity + ' tripulantes)\n'+
            'Velocidade atual: '+ this.spaceship.velocity
        )
    }
}