/* eslint-disable no-undef */
import { renderHook, waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// # Un customHook se evalua en base a lo que retorna
// # En este caso, el customHook useFetchGifs retorna un objeto con dos propiedades

describe('Pruebas para el hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial', () => {
    const {result} = renderHook(() => useFetchGifs('solo leveling'))
    //console.log(result)
    const {images, isLoading} = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
    })
    
    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const {result} = renderHook(() => useFetchGifs('solo leveling'))
    
    /*
    * waitFor --> Permite esperar a que algo suceda 
    * en este caso esperamos a que el arreglo de imagenes sea mayor a 0
    * Debido a que la función getImages es asíncrona, se debe esperar a que se resuelva
    * Y esta funcion esta encargada de cambiar esos valores de images y isLoading
    */
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
    })
})