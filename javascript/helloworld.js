let pilot = prompt('Qual o nome do piloto?')
let velocity = 0
let velocityConfirm = prompt('Qual a velocidade que você gostaria de acelerar?')
let confirmation = confirm('Deseja viajar a ' + velocityConfirm +'?')

if(confirmation){
    velocity = velocityConfirm
}
if(velocity<0){
    alert('Nave está parada. Considere partir e aumentar a velocidade')
}else if(velocity<40){
    alert('Você está devagar, podemos aumentar mais')
}else if(velocity>=40&&velocity<80){
    alert('Parece uma boa velocidade para manter')
}else if(velocity>=80&&velocity<100){
    alert('Velocidade alta. Considere diminuir.')
}else if(velocity>=100){
    alert('Velocidade perigosa. Controle automático forçado.')
}

alert(
    'Nome do piloto: '+pilot+'\n'+
    'Velocidade atual: '+velocity
)
