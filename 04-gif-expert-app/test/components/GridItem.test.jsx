import { render,screen } from "@testing-library/react";
import { GridItem } from "../../src/components/GridItem.jsx";

/* eslint-disable no-undef */
describe('Pruebas del componente <GridItem />', () => {
  const title = 'solo leveling';
  const url = 'https://media.giphy.com/media/3o7TKz9bX9Nv8a0lHa/giphy.gif';


  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GridItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  });


  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GridItem title={title} url={url} />);
    // * screen.debug(); --> Nos permite ver el HTML que se está renderizando
    // * screen.getByRole('img') --> Nos permite seleccionar un elemento por su rol, en este caso una imagen
    // * y esperamos que el src de la imagen sea igual al url que le pasamos al igual que el alt
    // expect(screen.getByRole('img').src).toBe(url);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Debe de mostrar el titulo en el componente', () =>{
    render(<GridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
});