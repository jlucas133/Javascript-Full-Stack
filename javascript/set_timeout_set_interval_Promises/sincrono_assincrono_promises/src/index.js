/*function step02(){
    console.log("Passo 02")
}

console.log("Passo 01")

step02()

console.log("Passo 03")

console.log("Passo 04")

setTimeout(() => {
    console.log("Passo 05")
}, 1000)

console.log("Passo 06")*/

let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}


const VelocityAfter2Seconds = (velocity, acceleration) =>{
    return new Promise(function(resolve, reject){  //resolve faz com que a promise tenha o estado de realizada e o reject de rejeitada(falha)
        setTimeout(() => {    
                if(acceleration>0){
                velocity += acceleration*2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            }else{
                console.log('Aceleração inválida')
                reject('Não possui aceleração')
            }
        }, 1000);
    })
}

VelocityAfter2Seconds(komodoShip.velocity,komodoShip.acceleration).then(velocity=>{  //then() quando a promise é encerrada com sucesso
    komodoShip.velocity = velocity
    console.log('Depois de acelerar: \n', komodoShip)
}).catch(message=>{
    console.log(`Komodo: ${message}`)
})


console.log("Execução de Promises")
console.log(komodoShip)