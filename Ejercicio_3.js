//Pedir los numeros hasta que se introduzca "cancelar" Si no es un numero debera indicarse con un "no entendido" y seguir pidiendo. Al salir con "cancelar" debera indicarse la suma total de los numeros recibidos

const sc = require("prompt-sync")({sigint: true});

let suma=0;
while(true){
    let scanner = sc("Dame un numero, si deseas salir escriba 'cancelar'")
    if(scanner==="cancelar"){
        console.log("La suma total es: " +suma);
        break;
    }
    let num=parseFloat(scanner);
    if(!isNaN(num)){
        suma+=num;
    }else{
        console.log("Numero no valido,inserte de nuevo");
    }
}