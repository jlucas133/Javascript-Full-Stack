import "core-js"
import "regenerator-runtime/runtime"
import Neo from "./neo"
import { getNeos } from "./neo_service"
import Sentry from "./sentry_ojects"

async function loadNeos(){
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const sentryId = neo["sentryId"]
        const name = neo["fullname"]
        const yearMin = neo["year_range_min"]
        const yearMax = neo["year_range_max"]
        const newSentry = new Sentry(sentryId, name, yearMin, yearMax)
        neos.push(newSentry)

    })
    renderNEOs(neos)
}


function renderNEOs(neos){
    const ulElement = document.getElementById("sentry-list")
    neos.forEach(neo =>{
        const liElement = document.createElement("li")
        const text =  `(${neo.sentryId}) ${neo.name}: risco de colisão entre ${neo.yearMin} e ${neo.yearMax}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}


loadNeos()
