const Planet = require('./planet')
const solarSystem = require('./solar_system')
const moment = require('moment')  // procura no node_modules como padrão
const earth = new Planet('Terra', 5010000)

earth.rotate()


solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 1448000000))
solarSystem.planets.push(new Planet("Mercúrio", 47800000))
solarSystem.planets.push(new Planet("Saturno", 4270000000))

console.log(solarSystem)
console.log(moment().format("h:mm"))