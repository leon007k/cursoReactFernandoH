// # Arreglo en JS

const array = [1, 2, 3, 4];

// ! No es recomendable hacer push de esta forma a un arreglo
// ! Ya que se puede modificar el objeto original
/* array.push(1);
array.push(2);
array.push(3);
array.push(4); */

// * De esta forma se crea un nuevo arreglo
// * Y se le asigna el valor 5, sin afectar el original
let array2 = [...array, 5];

const arrayToMultiple = array2.map((number) => { return number * 2 });

console.log(array);
console.log(array2);
console.log(arrayToMultiple);