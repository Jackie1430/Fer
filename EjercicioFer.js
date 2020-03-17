
/*
var num1 = parseInt(prompt("Dime el primer número"));
var num2 = parseInt(prompt("Dime el segundo número"));
var num3 = parseInt(prompt("Dime el tercer número"));
*/



//menor(num1, num2);
//SacalMenor(num1, num2, num3);

var array = [1, 2, 3];

xTamaño(array);

function xTamaño(matriz) {
    if ( matriz.length == 3) {
    alert(matriz);
    array.forEach( function Iterador(elemento, indice) {
        alert("el índice de " + elemento + " es el " + indice);
    })
}
}

//GetMinor(num1, num2);
//Get3Minor(num1, num2, num3);
//GetIndexMinor(num1, num2, num3);

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
function menor(a, b) {
if (a < b) {
    alert("El menor es" + a);
} else if (b < a) {
    alert("El menor es " + b);
} else {
    alert("LOS NÚMEROS SON IGUALES, PARDAL");
}
}
*/


/*
function SacalMenor(array) {
var array = [1, 2, 3];
if (a < b && a < c) {
    alert("El número 1 es el menor");
} else if (b < a && b < c) {
    alert("El número 2 es el menor");
} else if (c < a && c < b) {
    alert("El número 3 es el menor");
} else {
    alert("LOS NÚMEROS SON IGUALES, PARDAL");
}
}
*/

/*
function SacalMenor(matriz) {
    alert(matriz);
    }
*/


