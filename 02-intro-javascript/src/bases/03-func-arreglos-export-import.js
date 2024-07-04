//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);

// * Devuelve el valor del primer elemento del array 
// * que cumple la función de prueba proporcionada.
export function getHeroeById(id) {
  return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeById(3));

// * Retorna todos los elementos que cumplan la condición
export function getHeroesByOwner(owner) {
  return heroes.filter(heroes => heroes.owner === owner);
}

//console.log(getHeroesByOwner('DC'));