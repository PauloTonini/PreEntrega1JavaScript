///CALCULADORA VIRTUAL


const sumar = "+";
const restar = "-";
const multiplicar = "*";
const dividir = "/";

let resultado;
let continuar;

alert("Bienvenido a la calculadora virtual")
do {
    let operacion = prompt("Ingrese la operacion que desea realizar + - * /");
    let PrimerNumero = Number(prompt("Ingrese el primer numero"));
    let SegundoNumero = Number(prompt("Ingrese el segundo numero"));

    if (operacion == sumar) {
        resultado = PrimerNumero + SegundoNumero;
    } else {
        if (operacion == restar) {
            resultado = PrimerNumero - SegundoNumero
        } else {
            if (operacion == multiplicar) {
                resultado = PrimerNumero * SegundoNumero
            } else {
                if (operacion == dividir) {
                    resultado = PrimerNumero / SegundoNumero
                } else {
                    resultado = NaN
                    console.log("ingreso un caracter invalido")
                }
            }
        }
    }

    console.log("El resultado de la operacion es: " + resultado)
    continuar = prompt("Desea realizar otra operacion? si/ no")
} while (continuar == "si")

console.log("resto del codigo...")
