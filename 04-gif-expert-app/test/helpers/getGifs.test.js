import { getGifs } from '../../src/helpers/serviceGetGifs';

/* eslint-disable no-undef */
describe('Pruebas para el la función getGifs', () => {
  test('Debe de retornar una arreglo de gifs', async () => {
    const gifs = await getGifs('Solo Leveling');
    expect(gifs.length).toBeGreaterThan(0); // * Verifica que el arreglo tenga al menos un elemento
    expect(gifs[0]).toEqual({        // * Verifica que el primer elemento del arreglo tenga la siguiente estructura
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  });

});