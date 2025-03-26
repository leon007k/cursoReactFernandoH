import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

/* eslint-disable no-undef */
describe('Pruebas para el componente <AddCategory />', () => {

  test('Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategories={()=>{}} />)
    const input = screen.getByRole('textbox')

    // * fireEvent.input() --> Nos permite simular un evento de input
    // * {target: {value: 'solo leveling'}}) --> le pasamos un objeto con el valor que queremos que tenga
    fireEvent.input(input, {target: {value: 'solo leveling'}})
    expect(input.value).toBe('solo leveling')
    //screen.debug()
  })

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'solo leveling'
    const onNewCategories = jest.fn() // ! -> jest.fn() --> Nos permite crear una función mock

    render(<AddCategory onNewCategories={onNewCategories}/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form)
    //screen.debug()

    expect(input.value).toBe('')

    // * Esperamos que la función onNewCategories haya sido llamada una vez y con el valor de inputValue
    expect(onNewCategories).toHaveBeenCalled()
    expect(onNewCategories).toHaveBeenCalledTimes(1)
    expect(onNewCategories).toHaveBeenCalledWith(inputValue)
  })

  test('No debe llamar el onNewCategory si el input esta vació', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategories={onNewCategory}/>)
    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(0)

  })
})