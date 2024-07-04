import { render } from '@testing-library/react';
import FirstApp from '../../src/components/FirstApp';

describe('Pruebas en <FirstApp />', () => {

  /* 
    ! se comoenta porque no sera necesario el snapshot
  test('debe hacer match con el snapshot', () => {

    const title = 'Hola, Soy Goku!!'

    // * container -> es el contenedor que se renderiza en el test
    const { container } = render(<FirstApp title={title} />)

    // * toMatchSnapshot -> compara el snapshot con el componente renderizado 
    expect(container).toMatchSnapshot()
  }) */

  test('debe de mostrar el titulo en un h1', () => {

    const title = 'Hola, Soy Goku!!'

    // * getByText -> busca un elemento por el texto que contiene
    // * container -> es el contenedor que se renderiza en el test
    const { getByText, getByTestId } = render(<FirstApp title={title} />)
    expect(getByText(title)).toBeTruthy()

    // * getByTestId -> busca un elemento por el atributo data-testid
    // * toBe -> compara el valor del elemento con el valor esperado. El cual debera ser igual
    // * toContain -> busca una subcadena en el valor del elemento, solo buscara que contenga el mensaje esperado
    expect(getByTestId('test-title').innerHTML).toBe(title)

    /*
     ! se comenta porque nuestra prueba debe ser flexible 
     const h2 = container.querySelector('h2')
     expect(h2.innerHTML).toContain(title) */
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, Soy Goku!!'
    const subtitle = 'Soy un subtitulo'

    // * getAllByText -> busca todos los elementos que contengan el texto enviado
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    )

    expect(getAllByText(subtitle).length).toBe(2)
  })

});