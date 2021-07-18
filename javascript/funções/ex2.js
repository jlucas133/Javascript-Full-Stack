const hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

let greaterThan9Chars = hitchedSpaceships.filter(element => { return element[1] > 9}).map(spaceship =>{ return spaceship[0]})


let index = hitchedSpaceships.findIndex(element => { return element[2]== false})


let spaceshipUpcased = hitchedSpaceships.map(function(currentSpaceship){
    let upcased = currentSpaceship[0].toUpperCase()
    return upcased
})

let message = 'Espaçonaves com mais de 9 tripulantes: ' + greaterThan9Chars.join(', ')
message += '\nPlataforma com processo de engate: ' + (index+1)
message +='\nEspaçonaves destacadas: ' + spaceshipUpcased.join(', ')

alert(message)