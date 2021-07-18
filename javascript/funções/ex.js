let velocity = 0
let option = 0
let nome = prompt('Qual o nome da nave?')

function acelerar(){
    velocity+=5
}
function desacelerar(){
    velocity-=5
}
function imprimir(){
    alert(
        'Nome da nave: '+nome+'\n'+
        'Velocidade da nave: '+velocity
    )
}



do{
    
    option = prompt(
        'Escolha uma das opções abaixo. \n'+
        '1- Acelerar a nave em 5km/s\n'+
        '2- Desacelerar a nave em 5km/s\n'+
        '3- Imprimir dados de bordo\n'+
        '4- Sair do programa'
    )
    if(option==1){
        acelerar()
    }else if(option==2){
        desacelerar()
    }else if(option==3){
        imprimir()
    }
}while(option!=4)