// VARIABLES
const name = "KevinaDamian";
var x = "Valor";
let y = "Valoe";

let a = 20;
let b = 5.5;
let string = "mi nombre es Kevin Damian";
let number = "1223545";
let boolean_uno = false;
let boolean_two = true;
let array = [1,2,3,4,5];
let array_string = ["lunes","martes","miercoles","jueves","viermes"];

// OPERADORES ARITMETICOS: + -/ * % 
let suma = 1+5+a;
let resta = 1-5-a;
let multi = 1 * 5 * a;
let divi = 1 / 5 / a;
let module = 10%2;
let elev = 5^2;
console.log(suma + "-\n "+ resta + "-\n "+multi +"-\n "+divi +"-\n "+module +"-\n "+elev);

//OPERADORES DE COMPARACION = / == / === / <> / >= / <= / > / <

//OPERADORES Logicos and && / OR || /

if(10>5){
    for(let i=0; i<array_string.length;i++){
        console.log(array_string[i]);
    }
}

let j = 5;
let k = 10;
while(k>=j){
    console.log("entra");
    j++
    break
}