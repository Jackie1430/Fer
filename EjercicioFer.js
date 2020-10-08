//Estoy empezando a utilizar GitKraken y por eso pongo este comentario.
alert("Hey, estoy aprendiendo a utilizar GitHub");
alert("Hey, sigo aquí, aprendiendo a utilizar GitHub");
alert("Oye, que esto no para");
/*
Variables:
var num1 = parseInt(prompt("Dime el primer número"));
var num2 = parseInt(prompt("Dime el segundo número"));
var num3 = parseInt(prompt("Dime el tercer número"));
*/
/*
LLamadas a Funciones:
GetMinor(num1, num2);
Get3Minor(num1, num2, num3);
GetIndexMinor(num1, num2, num3);
xTamaño(array);
*/

var array = [1, 2, 3];
var i = 0;
var segundaI = 0; 

//While----------------------------------------------------------------------------------------------------------------------------------

while (i < array.length) {
    alert("El elemento: " + array[i] + ", tiene como índice: " + i)
    i ++;
}

//Do While ------------------------------------------------------------------------------------------------------------------------------

do {
    alert("El índice es el: " + segundaI + "\n" +  "El elemento es el: " + array[segundaI]);
    segundaI += 1;
}
while (segundaI < array.length);




/*
function GetMinor(a, b) {
    if (a < b) {
        return alert("El elemento menor es el " + a);//true;
    } else {
        return alert("El elemento menor es el " + b);//false;
    }
}
*/

/*
function Get3Minor(a, b, c) {
    if (a < b && a < c) {
        return alert("El elemento menor es el " + a);//true;  
    } else if (b < a && b < c) {
        return alert("EL elemento menor es el " + b);//true;
    } else if (c < a && c < b) {
        return alert("EL elemento menor es el " + c);//true;
    } else {
        return alert("Los elementos son iguales");//false;
    }
}
*/

/*
function GetIndexMinor(a, b, c) {
    if (a < b && a < c) {
        return alert("El elemento menor es el 1");//true;  
    } else if (b < a && b < c) {
        return alert("EL elemento menor es el 2");//true;
    } else if (c < a && c < b) {
        return alert("El elemento menor es el 3");//true;
    } else {
        alert("Los números son iguales");
    }
}
*/
/*
function xTamaño(matriz) {
    if ( matriz.length == 3) {
    alert(matriz);
    array.forEach( function Iterador(elemento, indice) {
        alert("el índice de " + elemento + " es el " + indice);
    })
}
}
*/
