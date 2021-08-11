let spaceship = prompt('Qual o nome da espaçonave?')
let caractere = prompt('Qual caractere você deseja substituir?')
let caractereSubstituir = prompt('Por qual caractere você deseja substituir?')
let newName = ''

for(i = 0; i<spaceship.length ; i++){
    if(spaceship[i]==caractere){
        newName += caractereSubstituir
    }else{
        newName += spaceship[i]
    }
}

alert('O novo nome da nave é '+newName)

