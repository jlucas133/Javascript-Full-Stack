import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false
}

async function adjustPosition(x, y, z) {
    if(z>90){
        return Promise.reject("Ângulo Z inválido")
    }
    laserGun.currentPosition = [x, y, z]
    return [x, y, z]
}

async function fire(x, y, z) {
    laserGun.firing = true
    return [x, y, z]
}

async function loadAmmo(){
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve("Arma carregada")
    }, 2000)
  })
}

async function moveAndFire(x, y, z) {
    try{
      const adjustPositionPromise = adjustPosition(x, y, z) // sem o await irá retornar o promise que em seu resolve tem [x, y, z]
      //let newCoordinates = await adjustPosition(x, y, z) // não retorna mais a Promise e sim o resolve direto da async function
      const loadAmmoPromise = loadAmmo()

      let promiseResult = await Promise.all([adjustPositionPromise, loadAmmoPromise])
      let newCoordinates = promiseResult[0]

      console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)

      let fireCoordinates = await fire(...newCoordinates)
      console.log(`Começando a atirar nas coordenadas (${fireCoordinates[0]}, ${fireCoordinates[1]}, ${fireCoordinates[2]})`)
    }catch(error){
      console.log(error)
    }
    /*adjustPosition(x, y, z).then(coord => {
    console.log(`Arma ajustada para as coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    return fire(...coord)
  }).then(coord => {
    console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
  }).catch(erro =>{
    console.log(error)
  })*/
}

moveAndFire(20, 40, 90)