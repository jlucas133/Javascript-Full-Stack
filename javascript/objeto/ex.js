let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt('Digite o nome da nave: ')
    spaceship.type = prompt('Digite o tipo da nave: ')
    spaceship.maxVelocity = Number(prompt('Digite a velocidade máxima da nave: '))
}
function acelerate(){
    let acceleration = Number(prompt('Quanto você deseja acelerar? '))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert(
            'A velocidade máxima foi ultrapassada!\n'+
            'Velocidade da nave: ' + spaceship.velocity +' km/s\n'+
            'Velocidade máxima permitida da nave: ' + spaceship.maxVelocity + ' km/s'
        )
    }
}
function stop(){
    alert(
        'Nome: '+spaceship.name +
        '\nTipo: '+spaceship.type +
        '\nVelocidade da nave: '+spaceship.velocity +
        '\nMáxima da nave: '+spaceship.maxVelocity
    )
    spaceship.velocity = 0
}

function showMenu(){
    let decisionSpaceship
    do{
        decisionSpaceship = prompt('1- Acelerar a nave.\n2- Parar a nave. ')
        switch(decisionSpaceship){
            case '1':
                acelerate()
                break
            case '2':
                stop()
                break
            default:
                alert('Opção inválida')
        }
    }while(decisionSpaceship != 2)
    alert('A nave parou.')
}

registerSpaceship()
showMenu()

