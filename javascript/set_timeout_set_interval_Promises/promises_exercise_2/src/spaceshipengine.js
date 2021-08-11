export default class {
    constructor(spaceship){
        this.spaceship = spaceship
    }
    powerOn(){
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.testShield()
        Promise.all([currentChargeChecking, shieldChecking]).then(results =>{
            return this.normalizeShield(results[1])
        }).then(newShield=>{
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
        }).catch(error=>{
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        })
    }

    normalizeShield(shield){
        return new Promise((resolve, reject)=>{
            if(shield*0.7 > 120){
                reject('Shield testado passou de 120')
            }else{
                resolve(shield)
            }
        })
    }

    checkCurrentCharge(){
        return new Promise((resolve,reject)=>{
            let currentCharge = this.spaceship.percentCharge()
            if(currentCharge>30){
                resolve(currentCharge)
            }else{
                reject(currentCharge)
            }
        })
    }

    testShield(){
        return new Promise((resolve,reject)=>{
            let shield = this.spaceship.shield*2
            if(shield < 100){
                reject('Shield testado não é compatível')
            }else{
                resolve(shield)
            }
        })
    }
}
