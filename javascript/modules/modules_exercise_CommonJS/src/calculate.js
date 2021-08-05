module.exports = {
    get AU_IN_KM(){return 149587870},

    conversion(distance){
        if(distance>0){
            distance = this.AU_IN_KM *  distance
        }
        return distance
    }
}
