describe('Pruebas en el archivo demo.test.js', () => {
  test('Esta prueba, no deberia fallar', () => {
    // *  1.- inicializacion
    const message1 = "Hola Mundo";

    // * 2.- Estimulo
    const message2 = message1.trim();

    // * 3.- Observar el comportamiento.. esperado
    expect(message1).toBe(message2);
  })
})

