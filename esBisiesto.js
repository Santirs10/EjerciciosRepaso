const sc = require("prompt-sync")({ sigint: true });
anyo=sc("Dame un año y yo te diré si es o no bisiesto --> ");
    if(anyo%400==0 || anyo%4==0){
        console.log("El año dado es bisiesto");

    }else{
        console.log("El año no es bisiesto")
    }