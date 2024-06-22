import PropTypes from 'prop-types';
import { useState } from 'react';

export function CounterApp({ value }) {

  const [counter, setCounter] = useState(value);

  const handleClickIncrementCounter = () => setCounter(counter + 1)

  const handleClickDecrementCounter = () => setCounter(counter - 1);

  const handleClickResetCounter = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> Incrementa: {counter} </h2>
      <p>Toca el boton, para incrementar el valor </p>

      <button onClick={handleClickIncrementCounter}> +1 </button>
      <button onClick={handleClickDecrementCounter}> -1 </button>
      <button onClick={handleClickResetCounter}> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}