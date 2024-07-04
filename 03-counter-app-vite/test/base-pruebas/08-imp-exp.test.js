import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
  });

  test('getHeroeById debe retornar undefined si heroe no existe', () => {
    const id = 6;
    const heroe = getHeroeById(id);

    // * TobeFalsy es una forma de comprobar si un valor es undefined    
    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const heroesByOwnerExpected = getHeroesByOwner(owner);

    expect(heroesByOwnerExpected).toEqual(
      [
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ]
    )

    expect(heroesByOwnerExpected.length).toBe(3);
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesByOwnerExpected = getHeroesByOwner(owner);
    //console.log(heroesByOwnerExpected);

    expect(heroesByOwnerExpected).toEqual(
      [
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
      ]
    );

    expect(heroesByOwnerExpected.length).toBe(2);
  });
});