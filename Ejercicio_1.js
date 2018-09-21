function palindroma(palabra){
    var arreglo = palabra.split("");
    
    if (arreglo.reverse().join("")== palabra){
        console.log("Es palindroma");
    }else{
        console.log("No es palindroma");
    }


}