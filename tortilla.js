const sc = require("prompt-sync")({ sigint: true });

let comensales = 0;
let con = 0;
let sin = 0;
const patatasPorPersona = 200;
const huevosPorKilo = 5;
const cebollaPorKilo = 300;
let vino = 0;

function sentarComensales() {
    comensales = sc("¿Cuántos comensales van a ser?");
    
    if (Number(comensales) > 0) {
        con = sc("¿A cuántos les gusta con cebolla?");
        sin = sc("¿A cuántos les gusta sin cebolla?");
        
        if (Number(con) + Number(sin) === Number(comensales)) {
            console.log("Les gusta con cebolla a: " + con + " y sin cebolla a: " + sin);
        } else {
            console.log("El número de comensales no coincide");
            return;
        }
    } else {
        console.log("Por favor, inserte un número de comensales válido");
        return;
    }

    calcularIngredientes();
}

function calcularIngredientes() {
    const patatasTotales = comensales * patatasPorPersona;
    const huevosTotales = Math.ceil(patatasTotales / 1000) * huevosPorKilo; //devuelve el entero mayor o igual mas proximo al numero
    const cebollaTotales = Math.ceil(patatasTotales / 1000) * cebollaPorKilo;

    console.log("Necesitarás:");
    console.log(patatasTotales + " gramos de patatas");
    console.log(huevosTotales + " huevos");
    console.log(cebollaTotales + " gramos de cebolla");

    calcularVino();
}

function calcularVino() {
    vino = Math.floor(comensales / 2); //redondeo 
    console.log("Necesitarás " + vino + " botellas de vino");
}

sentarComensales();