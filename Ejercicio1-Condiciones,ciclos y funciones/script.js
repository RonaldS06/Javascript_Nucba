
/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */
console.log("-EJERCICIO N°1-") /* Ejercicio 1 */

function parImpar(number) {
    if (number % 2 !== 0) {
        console.log(`El número '${number}' es: IMPAR`);
    } else {
        console.log(`El número '${number}' es: PAR`);
    }
}
parImpar(3);
parImpar(6);

/* ------------ */

/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. */
console.log("-EJERCICIO N°2-") /* Ejercicio 2 */

function numbers(numOne, numTwo) {
    if (numOne > numTwo) {
        console.log(`El número '${numOne}' es MAYOR que '${numTwo}'`)
    } else if (numOne < numTwo) {
        console.log(`El número '${numOne}' es MENOR que '${numTwo}'`)
    } else {
        console.log(`El número '${numOne}' es IGUAL '${numTwo}'`)
    }
}
numbers(4, 2)
numbers(3, 6)
numbers(8, 8)

/* ------------ */
/*3-Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. */
console.log("-EJERCICIO N°3-") /* Ejercicio 3 */
function numberMultiplo(numM){
    if(numM % 5 === 0){
        console.log(`El número '${numM}' Si es múltiplo de 5 😎`)
    }else{
        console.log(`El número '${numM}' No es múltiplo de 5 😦`)
    }
}
numberMultiplo(25);
numberMultiplo(32);

/* ------------ */
/*4-Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/
console.log("-EJERCICIO N°4-") /* Ejercicio 4 */
function numAlcance(numContador){
    let i=0
    while(i <= numContador){
        console.log(i);
        i++
    }
}
numAlcance(7);

/* ------------ */
/*5-Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.*/
console.log("-EJERCICIO N°5-") /* Ejercicio 5 */
function numWord(number, word){
    for(i = 0; i < number; i++){
        console.log(word)
    }
}
numWord(5, "Perro🐶");

/* ------------ */
/*6-Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/
console.log("-EJERCICIO N°6-") /* Ejercicio 6 */
function array(valores){
    for(i=0; i < valores.length; i++){
        console.log(valores[i])
    }
}

let animales = ["Loro🦜", "Gato😺", "Mono🐵"]
array(animales)

/* ------------ */
/*7-Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/
console.log("-EJERCICIO N°7-") /* Ejercicio 7 */

function array2(valores2){
    for(let i=0; i<valores2.length; i++){
        if(valores2[i]===5){
            continue;
        }
        console.log(valores2[i])
    }
}
let numbersArray = [1,2,3,4,5,6,7,8,9,10]
array2(numbersArray)


/* ------------ */
/*8-Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/
console.log("-EJERCICIO N°-8") /* Ejercicio 8 */

function array3(numArray, numValor){

    for(i = 0; i < numArray.length; i++){
        let resultadoValor = numArray[i] * numValor;
        console.log(resultadoValor); 
    }

}

let multipicarArray = [1,2,3,4]
array3(multipicarArray, 5)