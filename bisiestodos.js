const sc = require("prompt-sync")({ sigint: true });
let año = sc("Dime un año, y te diré si es bisiesto, o no. --> ")
let bisiesto = false
if (Number(año)) { //la funcion number sirve para comprobar que es un numero
    if (Number(año) <= 1582) {
        console.log("El año bisiesto se estableció en 1582, pero yo te lo calculo igualmente :)")
    }
    if ((Number(año) % 400 == 0) || (Number(año) % 4 == 0) && (Number(año) % 100 != 0)) {
        bisiesto = true
    }
    if (bisiesto == true) {
        console.log("El año " + año + " es bisiesto")
    } else {
        console.log("El año " + año + " no es bisiesto")
    }
}
else {
    console.log("Me tenías que dar un número...")
}
console.log("Adios...")