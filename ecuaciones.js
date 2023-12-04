console.log("Este programa te calcula la solución a una ecuación de segundo grado estándar")
console.log("Ten en cuenta que si es -2x se multiplica por -2 y no 2")
const sc = require("prompt-sync")({ sigint: true });
let cuadrado = sc("Escribe el valor que esté X al cuadrado --> ");
let x =sc("Escribe el valor de X --> ")
let num=sc("Escribe el ultimo valor --> ")
let soluciónposi=0;
let soluciónnega =0;
let ac = cuadrado*num
let raiz =(Math.sqrt(Math.pow(x,2) - (4*ac)))

if (Number(cuadrado) && Number(x) && Number(num)) {
    soluciónposi = (-x + raiz)/(2*cuadrado)
    soluciónnega = (-x - raiz)/(2*cuadrado)
    console.log("Las soluciones son: "+soluciónnega +" y "+soluciónposi);
}
else{
   console.log("Tienes que escribir números")
}