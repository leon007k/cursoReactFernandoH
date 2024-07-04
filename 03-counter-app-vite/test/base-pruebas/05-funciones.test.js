import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.test.js', () => {
  test('getUser debe retornar un objeto', () => {
    const objectUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const userTest = getUser()

    // * Con toEqual se usa para comparar objetos
    expect(userTest).toEqual(objectUser)
  });

  test('getUsuarioActivo debe retornar un objeto con el nombre enviado', () => {

    const name = 'Leonardo'

    const objectUser = {
      uid: 'ABC567',
      username: name
    }

    const userTest = getUsuarioActivo(name)

    expect(userTest).toEqual(objectUser)
  });
});
