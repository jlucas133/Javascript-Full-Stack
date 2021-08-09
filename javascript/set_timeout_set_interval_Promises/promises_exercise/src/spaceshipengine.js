export default class {
    constructor(spaceship){
        this.spaceship = spaceship
    }
    powerOn(){
        this.checkCurrentCharge().then(currentCharge =>{
            console.log(`(${this.spaceship.name}) Partida Autorizada: carga atual em ${currentCharge.toFixed(2)}%.`)
        }).catch(currentCharge=>{
            console.log(`(${this.spaceship.name}) Partida não Autorizada: carga atual em ${currentCharge.toFixed(2)}%.`)
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
}
