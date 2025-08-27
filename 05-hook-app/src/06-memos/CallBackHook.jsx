
import { useState, useCallback } from 'react';
import ShowCounter from './components/ShowCounter';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(1)

  // * useCallback: memoriza la funcion y no se vuelve a crear
  // * a menos que cambien las dependencias
  // * En este caso, incrementCounter no tiene dependencias,
  // * por lo que se crea una sola vez y no se vuelve a crear
  // * se agrega un valor por defecto de 1 y se puede pasar un valor que determine el incremento
  const incrementCounter = useCallback(
    (value) => {
      setCounter((c) => c + (value || 1))
    },
    [],
  )
  
  return (
    <section className="container-md p-3">
      <h1 className="h1">CallBackHook</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <hr />
      <ShowCounter incrementCounter={incrementCounter} />
    </section>
  )
}
