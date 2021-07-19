class Weapon{
    constructor(name){
        this.name = name
        this.ammunition = 5
    }
    shoot(){
        if(this.ammunition > 0){
            alert('Bang!')
            this.ammunition -= 1
        }else {
            throw new Error('Munição acabou!')
        }
        
    }
    reload(){
        this.ammunition = 5
    }
}

let weapon = new Weapon('Eagle')

try{
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
}catch(e){
    alert(e.message)
    weapon.reload()
}finally{
    alert('A arma deu bons tiros')
}


