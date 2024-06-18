// # Objetos literales

const person = {
  name: 'Ismael',
  lastname: 'Martinez',
  age: 31,
  country: 'MX',
  direction: {
    city: 'CDMX',
    zip: 12345,
    lat: 14.3232,
  }
};

console.log(person);
console.table(person); // # Muestra la información en forma de tabla

// ! Esta no es la forma correcta de copiar un objeto
// ! Aqui lo que estamos haciendo es solo una asignación de referencia
// ! Si modificamos el objeto nuevo, también se modifica el objeto original
const newPerson = person;
newPerson.name = 'Peter';

console.log(person);
console.log(newPerson);

// * Para hacer una copia de un objeto, se puede hacer de la siguiente forma
// * Con el operador spread (...) se copia el objeto y se crea uno nuevo
const newPerson2 = { ...person };
newPerson2.name = 'Tony';
console.log(person);
console.log(newPerson);
console.log(newPerson2);



