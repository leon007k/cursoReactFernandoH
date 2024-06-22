import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string', () => {
  test('getSaludo debe retornar "Hola Leonardo"', () => {

    // * 1.- inicializacion
    const name = "Leonardo"
    const messageExpect = "Hola " + name;

    // * 2.- Estimulo
    const saludo = getSaludo(name)

    // * 3.- Observar el comportamiento.. esperado
    expect(saludo).toBe(messageExpect)
  })
})