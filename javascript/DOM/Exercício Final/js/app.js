class App{

    adcElement(){
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let imovel = new Imovel(kind, area, rented)
        
        this.addOnPropertiesList(imovel)
        this.cleanForm()
    }

    addOnPropertiesList(imovel){
        let newLi = document.createElement('li')
        let propertyInfo = ' Tipo: '+ imovel.kind + ' (Área: '+ imovel.area+' m²)'

        if(imovel.rented){
            let rentedMark = this.createRentedMark()
            newLi.appendChild(rentedMark)
        }
        newLi.innerHTML += propertyInfo
        let buttonRemove = this.createRemoveButton()
        newLi.appendChild(buttonRemove)
        document.getElementById('list').appendChild(newLi)

    }

    createRentedMark(){
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
    }
    cleanForm(){
        document.querySelector("input[name='area']").value = ''
        document.querySelector("input[name='rented']").checked = false

    }

    createRemoveButton(){
        let buttonRemove = document.createElement('button')
        buttonRemove.setAttribute('onclick','app.removeElement(this)')
        buttonRemove.innerText = 'Remover'
        return buttonRemove
    }
    removeElement(element){
        let parente = element.parentNode
        if(parente){
            parente.parentNode.removeChild(parente)
        }
    }
}

