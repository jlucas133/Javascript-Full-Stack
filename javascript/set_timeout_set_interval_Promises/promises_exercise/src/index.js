import Spaceship from "./spaceship"
import SpaceshipEngine from "./spaceshipengine"

let sophia = new Spaceship("Sophia", 10, 5)
let amsterda = new Spaceship("Amsterdã", 14, 10)
let estrelaAna = new Spaceship("Estrela-Anã", 20, 4)

let sophiaEngine = new SpaceshipEngine(sophia)
let amsterdaEngine = new SpaceshipEngine(amsterda)
let estrelaEngine = new SpaceshipEngine(estrelaAna)

sophiaEngine.powerOn()
amsterdaEngine.powerOn()
estrelaEngine.powerOn()


console.log("Promises")





