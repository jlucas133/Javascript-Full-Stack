const Planet = require('./planet')
const calculate = require('./calculate')
const solarSystem = require('./solar_system')


solarSystem.planets.push(new Planet("Terra", 1))
solarSystem.planets.push(new Planet("Marte", 1.52))
solarSystem.planets.push(new Planet("Mercúrio", 0.39))
solarSystem.planets.push(new Planet("Saturno", 9.53))
solarSystem.planets.push(new Planet("Vênus", 0.72))
solarSystem.planets.push(new Planet("Júpiter", 5.2))
solarSystem.planets.push(new Planet("Urano", 19.1))
solarSystem.planets.push(new Planet("Neturno", 30))

solarSystem.planets.forEach(planet=>{
    console.log(`Planeta: ${planet.name}\nDistância em AU:${planet.distance}\nDistância em Km:${calculate.conversion(planet.distance).toFixed(2)}`)
})

