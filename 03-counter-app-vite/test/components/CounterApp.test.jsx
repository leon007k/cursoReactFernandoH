import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../../src/components/CounterApp';

describe('Pruebas en <CounterApp />', () => {

  const initialValue = 100

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={initialValue} />)

    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial en 100', () => {

    const incrementMsg = `Incrementa: ${initialValue}`

    render(<CounterApp value={initialValue} />)

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(incrementMsg)
  })

  test('Debe de incrementar con el botón +1', () => {

    render(<CounterApp value={initialValue} />)

    // * fireEvent -> simula un evento en un elemento
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText(`Incrementa: ${initialValue + 1}`)).toBeTruthy()
  })

  test('Debe de decrementar con el botón -1', () => {

    render(<CounterApp value={initialValue} />)

    // * fireEvent -> simula un evento en un elemento
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText(`Incrementa: ${initialValue - 1}`)).toBeTruthy()
  })

  test('Debe de funcionar el boton reset', () => {

    render(<CounterApp value={initialValue} />)

    fireEvent.click(screen.getByRole('button', { name: 'btn-increment' }))
    fireEvent.click(screen.getByRole('button', { name: 'btn-increment' }))
    fireEvent.click(screen.getByRole('button', { name: 'btn-increment' }))

    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(`Incrementa: ${initialValue}`)

  })
});