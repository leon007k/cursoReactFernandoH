import { GifExpertApp } from "../src/GifExpertApp";
import { fireEvent, render,screen } from "@testing-library/react";

/* eslint-disable no-undef */
describe('Pruebas para el componente <GifExpertApp />', () => {

  const title = 'solo leveling'

  test('Debe mostrar la categoria si esta no existe', () => {
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, {target: {value: title}})
    fireEvent.submit(form)

    expect(screen.findByText(title)).toBeTruthy()    
    screen.debug()
  })

  test('No Debe mostrar la categoria si esta ya existe', () => {
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: title } })
    fireEvent.submit(form)
    //screen.debug()


    fireEvent.input(input, { target: { value: title } })
    fireEvent.submit(form)
    //screen.debug()

    expect(screen.getAllByText(title).length).toBeLessThan(2)
  })

  
})