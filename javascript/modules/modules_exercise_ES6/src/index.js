import Planet from './planet'
import solar_system from './solar_system'
import {conversion} from './calculate'

solar_system.planets.push(new Planet("Terra", 1))
solar_system.planets.push(new Planet("Marte", 1.52))
solar_system.planets.push(new Planet("Mercúrio", 0.39))
solar_system.planets.push(new Planet("Saturno", 9.53))
solar_system.planets.push(new Planet("Vênus", 0.72))
solar_system.planets.push(new Planet("Júpiter", 5.2))
solar_system.planets.push(new Planet("Urano", 19.1))
solar_system.planets.push(new Planet("Neturno", 30))

solar_system.planets.forEach(planet=>{
    console.log(`Planeta: ${planet.name}\nDistância em AU:${planet.distance}\nDistância em Km:${conversion(planet.distance).toFixed(2)}`)
})

