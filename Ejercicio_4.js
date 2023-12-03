//Realiza un script que pida cadenas de texto hasta que se pulse cancelar. Al salir con cancelar debe mostrarse todas las cadenas con un guion
const sc = require("prompt-sync")({sigint: true});

let cadena="";
while(true){
    let scanner = sc("Dame un texto, si deseas salir escriba 'cancelar'")
    if(scanner==="cancelar"){
        console.log("Las cadenas guardadas son: " +cadena);
        
        break;
    }
    cadena+=scanner+"--";

}