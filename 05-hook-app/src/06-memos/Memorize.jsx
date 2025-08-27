import {useCounter} from '../hooks/useCounter'
import Small from './components/Small'
import {useState} from 'react'

export function Memorize() {

  const {counter, incrementCounter} = useCounter(1)
  const [show, setShow] = useState(true)

  return (
    <section
      className="container-md p-3"
    >
      <h1>Counter: <Small value={counter}/></h1>
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
