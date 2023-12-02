const sc = require("prompt-sync")({ sigint: true });
const frase=sc("Introduzca una frase o palabra contaré las vocales --> ");
const vocales="aeiouAEIOU";
let numVocales=0;
for (let i = 0; i < frase.length; i++) { //primer for que recorre la frase
    for (let j= 0; j< vocales.length; j++) { //segundo for que recorre las vocales
       if(frase.charAt(i)==vocales.charAt(j)){ //igualamos la frase con las vocales es decir los dos for con charAt
            numVocales=numVocales+1; //para que vaya acumulando 
       }  
    }
}
console.log("El número total de vocales es: " +numVocales);  
