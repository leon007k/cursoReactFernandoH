import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas de 06-deses-obj.test.js', () => {
  test('usContext debe retornar un objeto', () => {
    const clave = 'Ironman';
    const edad = 45;

    const objToTest = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    }

    const getUsContext = usContext({ clave, edad })

    expect(objToTest).toEqual(getUsContext)
  });
});