const sc = require("prompt-sync")({ sigint: true });
let numdado = sc("Dime un número y te diré si es par o no --> ")

    if (Number(numdado)){
         esPar();
    }else{
        console.log("No es un número")
    }
function esPar(){
    if ((Number(numdado))%2===0) {
        console.log("El número es par")

    }else{
        console.log("El número es impar")
    }
}