function adcElement(){
    let number = document.getElementById('number').value

    let district = document.getElementById('district').value

    let city = document.getElementById('city').value

    let area = document.getElementById('area').value



    let newLi = document.createElement('li')
    newLi.innerText = area + ' - '+ number+ ' - ' + district+ ' - ' + city+'. '

    let buttonLi = document.createElement('button')
    buttonLi.type = 'button'
    buttonLi.innerText = 'Remover'
    buttonLi.setAttribute("onclick", "removeElement(this)")

    newLi.appendChild(buttonLi) 

    let elementoAtual = document.getElementById('list')
    elementoAtual.insertAdjacentElement("beforeend", newLi)
}

function removeElement(element){
    let parente = element.parentNode
    if(parente){
        parente.parentNode.removeChild(parente)
    }
}