let dataPartidaEntrada = prompt('Digite a data de partida (formato DD/MM/YYYY')

let dataPartida = moment(dataPartidaEntrada, 'DD/MM/YYYY')

let today = moment()

let dataDiff = today - dataPartida

let chosenOption = prompt('Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias')

if(chosenOption==1){
    let seconds = Math.round(dataDiff/1000)
    alert('Tempo de vôo: '+seconds+ ' segundos')
}else if(chosenOption==2){
    let minutes = Math.round(dataDiff/1000/60)
    alert('Tempo de vôo: '+minutes+ ' minutos')
}else if(chosenOption==3){
    let hours = Math.round(dataDiff/1000/3600)
    alert('Tempo de vôo: '+hours+ ' horas')
}else if(chosenOption==4){
    let days = Math.round(dataDiff/1000/3600/24)
    alert('Tempo de vôo: '+days+ ' dias')
}else{
    alert('Opção inválida')
}