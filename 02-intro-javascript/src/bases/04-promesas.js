import { getHeroeById } from "./bases/03-func-arreglos-export-import";



/* const promise = new Promise((resolve, reject) => {


  setTimeout(() => {
    const heroesList = getHeroeById(2);
    //resolve(heroesList);
    reject('No se pudo encontrar el héroe');
  }, 2000);

});

promise.then((heroe) => {
  console.log('Then de la promesa:', heroe);
})
  .catch(err => console.warn(err)); */

function getHeroeByIDAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroesList = getHeroeById(id)
      heroesList ? resolve(heroesList) : reject('No se pudo encontrar el héroe');
    }, 2000);
  })
}

/* 
getHeroeByIDAsync(3)
  .then((heroeList) => console.log('Lista de heroe:', heroeList))
  .catch(err => console.warn(err)); 
*/

// * Esta es otra manera de hacer lo mismo que el código anterior
// * Solo que se hace de manera más limpia
getHeroeByIDAsync(2)
  .then(console.log)
  .catch(console.warn);