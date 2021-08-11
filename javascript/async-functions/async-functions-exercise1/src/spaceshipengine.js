export default class {
    constructor(spaceship){
        this.spaceship = spaceship
    }
    async powerOn(){
        try{
            let currentChargeChecking = this.checkCurrentCharge()
            let shieldChecking = this.testShield()
            let promiseResult = await Promise.all([currentChargeChecking, shieldChecking])
            let newShield = await this.normalizeShield(promiseResult[1])

            this.spaceship.shield = newShield

            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
        }catch(error){
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        }
        
        
        
        
        
        /*.then(results =>{
            return this.normalizeShield(results[1])
        }).then(newShield=>{
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
        }).catch(error=>{
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        })*/
    }

    async normalizeShield(shield){
        let normalizeShield = shield*0.7
        if(shield*0.7 > 120){
            return Promise.reject('Shield testado passou de 120')
        }else{
            return normalizeShield
        }
    }

    async checkCurrentCharge(){
        let currentCharge = this.spaceship.percentCharge()
        if(currentCharge>30){
            return currentCharge
        }else{
            return Promise.reject(`bateria em ${currentCharge}%`)
        }
    }

    async testShield(){
        let shield = this.spaceship.shield*2
        if(shield < 100){
            return Promise.reject('Shield testado não é compatível')
        }else{
            return shield
        }
    }
}
