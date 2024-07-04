import { render, screen } from '@testing-library/react';
import FirstApp from '../../src/components/FirstApp';

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, soy Goku!!'
  const subtitle = 'Soy un subtitulo'

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  })

  test('debe mostrar el mensaje "Hola, soy Goku!!"', () => {
    render(<FirstApp title={title} />);

    // * screen -> Objeto a renderizar. Contiene todo lo renderizado
    expect(screen.getByText(title)).toBeTruthy();
    // * Verificamos que el elemento con el testId 'test-title' contenga el texto 'Hola, soy Goku!!'
    //expect(screen.getByTestId('test-title').innerHTML).toBe(title)
  })

  test('Debe de mostrar el titulo en un h2', () => {
    render(<FirstApp title={title} />);

    // * getByRole -> Busca un elemento por su rol
    // * heading -> Busca un elemento de tipo h1, h2, h3, h4, h5, h6
    // * level: 2 -> Busca un elemento h2
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(title)
  })

  test('Debe de mostrar dos subtitulos', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  })
});