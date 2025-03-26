/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas para el componente <GifGrid />', () => {

  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  })

  const category = 'solo leveling'

  test('Debe mostrar el loading inicialmente', () => {
    render(<GifGrid category={category}/>)

    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy
    screen.debug()

  })

  test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const imgs = [
      {
        id: 'ABC',
        title: 'solo leveling',
        url: 'https://localhost/cualquier/leveling.jpg'
      },
      {
        id: '123',
        title: 'goku',
        url: 'https://localhost/cualquier/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: imgs,
      isLoading: false,
    })

    render(<GifGrid category={category}/>)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})