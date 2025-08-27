import {useCounter} from '../hooks/useCounter'
import {useState, useMemo} from 'react'

// * Diferencia entre useMemo y React.memo:
// # useMemo se utiliza para memorizar el resultado de una función, 
// # evitando que se vuelva a calcular en cada renderizado si las dependencias no han cambiado.
// # Por otro lado, React.memo es un componente de orden superior que memoriza el resultado 
// # de un componente, evitando que se vuelva a renderizar si las props no han cambiado.

const heavyProcess = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++){
    console.log('Ahi vamos...')
  }

  return `${iterationNumber} iteraciones realizadas`
}

export function MemoHook() {

  const {counter, incrementCounter} = useCounter(1)
  const [show, setShow] = useState(true)

  // * useMemo es un hook de React que memoriza el resultado de una función
  // * para evitar que se vuelva a calcular en cada renderizado
  // ! Simulamos un proceso pesado
  // * Usamos useMemo para memorizar el resultado de la función heavyProcess
  // * Esto evita que la función se vuelva a ejecutar si el valor de "counter"
  // * no ha cambiado, mejorando el rendimiento de la aplicación
  // * Si no usamos useMemo, la función se ejecutaría en cada renderizado,
  // * lo que podría afectar el rendimiento si el proceso es pesado
  const memorizeValue =  useMemo( () => heavyProcess(counter), [counter]) 

  return (
    <section
      className="container-md p-3"
    >
      <h1>Counter: <small>{counter}</small></h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => incrementCounter()}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </section>
  )
}
