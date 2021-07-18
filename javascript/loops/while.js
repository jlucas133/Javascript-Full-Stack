let nome = prompt('Qual o nome da nave?')
let confirmation = prompt('Deseja entrar em uma dobra espacial?\n1- Sim\n2- Não')
let dobra = 0


while(confirmation==1){
    dobra+=1
    confirmation = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}
alert(
    'Nome da nave: '+nome+'\n'+
    'Número de dobras realizadas: '+dobra
)
