
class Spaceship{
    constructor(name, quantity){
        this.name = name
        this.crewQuantity = quantity
        this.isHitched = false
        this.doorsOpen = false
    }
    hitch(){
        this.isHitched = true
        this.doorsOpen = true
    }
}


function createSpaceship(){
    let name = prompt('Qual o nome da nave que deseja cadastrar?')
    let quantity = prompt('Qual a quantidade de tripulantes da nave?')
    let spaceship = new Spaceship(name, quantity)
    return spaceship
}

function showSpaceships(spaceShips){
    let spaceshipList = ''
    spaceShips.forEach((spaceship, index)=>{
        spaceshipList +=(index + 1) + '- ' + spaceship.name + ' (' + spaceship.crewQuantity + ' tripulantes)\n'
    })
    alert(spaceshipList)
}

function showMenu(){
    let decisionSpaceship
    do{
        decisionSpaceship = prompt('1- Realizar engate.\n2- Mostrar lista de naves.\n3- Sair do programa.')
        switch(decisionSpaceship){
            case '1':
                let spaceshipToAdd = createSpaceship()
                spaceshipToAdd.hitch()
                spaceShips.push(spaceshipToAdd)
                break
            case '2':
                showSpaceships(spaceShips)
                break
            case '3':
                break
            default:
                alert('Opção inválida')
        }
    }while(decisionSpaceship != 3)
    alert('O programa foi encerrado!')

}


let spaceShips = new Array()


showMenu()