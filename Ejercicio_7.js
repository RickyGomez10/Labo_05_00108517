function bisiesto(anio){
    if(anio%4 == 0 && anio%100 != 0 || anio%400 ==0){
        console.log("Si es bisiesto");
    }else{
        console.log("No es bisiesto");
    }
}