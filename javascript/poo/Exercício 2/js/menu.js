function showSpaceship(spaceship){
    alert(
        spaceship.name + ' (' + spaceship.crewQuantity + ' tripulantes)\n'+
        'Velocidade atual: '+ spaceship.velocity
    )
}

function register(){
    let nome = prompt('Digite o nome da nave')
    let crewQuantity = prompt('Digite a quantidade de tripulantes da nave')
    let spaceshipChosen = Number(prompt('Escolha o tipo da sua nave:\n1- Batalha\n2- Transporte'))
    let spaceship
    if(spaceshipChosen==1){
        let weaponsQuantity = Number(prompt('Quantas armas a nave tem disponível?'))
        spaceship = new BattleSpaceship(nome, crewQuantity, weaponsQuantity)
    }else if(spaceshipChosen==2){
        let seatQuantity = Number(prompt('Quantos lugares a nave comporta?'))
        spaceship = new TransportSpaceship(nome, crewQuantity, seatQuantity)
    }

    return spaceship
}




function showMenu(){
    let spaceship = register()
    let spaceshipChosen
    do{
        spaceshipChosen = Number(prompt('O que deseja fazer?\n1-Acelerar a nave\n2-Trocar a nave\n3-Imprimir e sair'))
        switch(spaceshipChosen){
            case 1:
                let acceleration = Number(prompt('Qual a aceleração?'))
                spaceship.speedUp(acceleration)
                break
            case 2:
                spaceship = register()
                break
            case 3:
                showSpaceship(spaceship)
        }
    
    }while(spaceshipChosen!=3)
    alert('O programa foi encerrado!')
}


showMenu()


