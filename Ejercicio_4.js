function binario(numero){
    let bin = [];
    while(numero >=1){
        
        bin.push(numero%2);
        numero = Math.trunc(numero/2);
        
    }
    bin.reverse();
    console.log(bin);
}