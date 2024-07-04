import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe', async () => {
    const id = 1;
    const heroe = await getHeroeByIdAsync(id);
    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  });

  test('getHeroeByIdAsync debe obtener un error si el heroe no existe', () => {

    // # ESLINT: No permitir llamadas expect condicionalmente ( no-conditional-expect)
    // * Jest solo considera que una prueba ha fallado si arroja un error, lo que significa que si las llamadas 
    // * a funciones de aserción expectocurren en código condicional como una catchdeclaración, las pruebas pueden 
    // * terminar pasando pero en realidad no prueban nada. Además, los condicionales tienden a hacer que las pruebas
    // *  sean más frágiles y complejas, ya que aumentan la cantidad de pensamiento mental necesario para comprender 
    // * lo que realmente se está probando.
    // ! https://github.com/jest-community/eslint-plugin-jest/blob/v28.6.0/docs/rules/no-conditional-expect.md
    const id = 10;
    // expect.assertions(1);
    // return getHeroeByIdAsync(id).catch(err => expect(err).toMatch(`No se pudo encontrar el héroe con id ${id}`))

    // * Esta es una manera de cumplir con la regla no-conditional-expect
    return expect(getHeroeByIdAsync(id)).rejects.toMatch(`No se pudo encontrar el héroe con id ${id}`)
  });
});