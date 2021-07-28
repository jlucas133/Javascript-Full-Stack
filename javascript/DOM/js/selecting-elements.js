/*function show(){
    let element = document.getElementById('name')
    console.log(element.value)
}

function show(){
    let elements = document.getElementsByName('phone')
    console.log(elements[0].value)
}

function show(){
    let element = document.querySelectorAll("div#phones input[name='phone']")
    console.log(element[1].value)
}*/

function show(){
    let element = document.getElementsByTagName('input')
    console.log(element[0].value)
}