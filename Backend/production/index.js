const moment = require('moment')

function SayMyName(name){
    console.log(name)
    console.log(moment().format('HH:mm'))
}


SayMyName('Joao Lucas')