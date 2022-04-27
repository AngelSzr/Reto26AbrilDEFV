//Ejercicio 1
function reverse(s) {
    return s.split("").reverse().join("");
}
var sss = reverse("adam")
console.log(sss)

function palindrome(palabra) {
    posiblePalindromo = reverse(palabra)
    return palabra === posiblePalindromo
}

//Ejercicio 2
/*function longestCountry(arreglo) {
    let memoria = arreglo[0];
    for (i = 1; i <= arreglo.length - 1; i++) {
        console.log(arreglo[i])
        if (memoria.length < arreglo[i].length) {
            memoria = arreglo[i]
        }
    }
    return memoria
}*/
//Ejercicio 3
/*function farenheithToCelcius(grados) {
    return (grados - 32) * (5 / 9)
}*/

//Ejercicio 4
/*function contar(datos) {
    return datos.length
}*/