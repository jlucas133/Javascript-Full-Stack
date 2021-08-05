export const AU_IN_KM = 149587870
export function conversion(distance){
        if(distance>0){
            distance = AU_IN_KM *  distance
        }
        return distance
}

