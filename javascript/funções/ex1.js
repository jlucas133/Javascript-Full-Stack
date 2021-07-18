let velocity = 150

function desacelarar(velocity, printer){
    let deceleration = 20
    while(velocity>0){
        printer(velocity)
        velocity -= deceleration
    }
    alert('A nave está parada.\nComportas devem ser abertas.')
    return velocity
}

let printVelocity = velocity =>{
    alert('Velocidade atual da nave: ' + velocity)
}

velocity = desacelarar(velocity, printVelocity)


