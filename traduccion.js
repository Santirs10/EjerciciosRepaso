//Hacer que traduzca un numero a una cadena de caracteres.
const sc = require("prompt-sync")({ sigint: true });
let numero = sc("Escribe un número de 4 cifras --> ")
let cadena = numero.toLowerCase()
let miles = cadena.charAt(0);
let centenas = cadena.charAt(1);
let decenas = cadena.charAt(2);
let unidades = cadena.charAt(3);
let textomil = "mil "
if (Number(numero) > 999) {
    switch (miles) {
        case "1":
            break;
        case '2':
            textomil = "Dos " + textomil
            break;
        case "3":
            textomil = "Tres " + textomil
            break;
        case '4':
            textomil = "Cuatro " + textomil
            break;
        case '5':
            textomil = "Cinco " + textomil
            break;
        case '6':
            textomil = "Seis " + textomil
            break;
        case '7':
            textomil = "Siete " + textomil
            break;
        case '8':
            textomil = "Ocho " + textomil
            break;
        case '9':
            textomil = "Nueve " + textomil
            break;
        default:
            textomil = " "
            break;
    }
    switch (centenas) {
        case '1':
            centenas = "ciento "
            break;
        case '2':
            centenas = "doscientos "
            break;
        case '3':
            centenas = "trescientos "
            break;
        case '4':
            centenas = "cuatrocientos "
            break;
        case '5':
            centenas = "quinientos "
            break;
        case '6':
            centenas = "seiscientos "
            break;
        case '7':
            centenas = "setecientos "
            break;
        case '8':
            centenas = "ochocientos "
            break;
        case '9':
            centenas = "novecientos "
            break;

        default:
            centenas = ''
            break;
    }
    switch (decenas) {
        case '1':
            switch (unidades) {
                case '1':
                    decenas = "once "
                    break;
                case '2':
                    decenas = "doce "
                    break;
                case '3':
                    decenas = "trece "
                    break;
                case '4':
                    decenas = "catorce "
                    break;
                case '5':
                    decenas = "quince "
                    break;
                case '6':
                    decenas = "dieciséis "
                    break;
                case '7':
                    decenas = "diecisiete "
                    break;
                case '8':
                    decenas = "dieciocho "
                    break;
                case '9':
                    decenas = "diecinueve "
                    break;
                default:
                    decenas = "diez "
                    break;
            }
            unidades = ''
            break;
        case '2':
            if (unidades == '0') {
                decenas = " veinte"
            }
            else {
                decenas = " veinti"
            }
            break;
        case '3':
            if (unidades == '0') {
                decenas = " treinta"
            }
            else {
                decenas = " treinta y "
            }
            break;
        case '4':
            if (unidades == '0') {
                decenas = " cuarenta"
            }
            else {
                decenas = " cuarenta y "
            }
            break;
        case '5':
            if (unidades == '0') {
                decenas = " cincuenta"
            }
            else {
                decenas = " cincuenta y "
            }
            break;
        case '6':
            if (unidades == '0') {
                decenas = " sesenta"
            }
            else {
                decenas = " sesenta y "
            }
            break;
        case '7':
            if (unidades == '0') {
                decenas = " setenta"
            }
            else {
                decenas = " setenta y "
            }
            break;
        case '8':
            if (unidades == '0') {
                decenas = " ochenta"
            }
            else {
                decenas = " ochenta y "
            }
            break;
        case '9':
            if (unidades == '0') {
                decenas = " noventa"
            }
            else {
                decenas = " noventa y "
            }
            break;
        default:
            decenas = ''
            break;
    }
    if (decenas != '1') {
        switch (unidades) {
            case '1':
                unidades = "uno"
                break;
            case '2':
                unidades = "dos"
                break;
            case '3':
                unidades = "tres"
                break;
            case '4':
                unidades = "cuatro"
                break;
            case '5':
                unidades = "cinco"
                break;
            case '6':
                unidades = "seis"
                break;
            case '7':
                unidades = "siete"
                break;
            case '8':
                unidades = "ocho"
                break;
            case '9':
                unidades = "nueve"
                break;
            default:
                unidades = ''
                break;
        }
    }
    console.log("Tu número traducido es "+textomil + centenas + decenas + unidades)
}
else {
    console.log("No es un número de 4 cifras")
}