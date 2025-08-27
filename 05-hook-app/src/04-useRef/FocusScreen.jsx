import {useRef} from 'react';

export  function FocusScreen() {

  const inputRef = useRef()

  const onCLick = () => {
    inputRef.current.select()
  }


  return (
    <section className="container-md">
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref = {inputRef}
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control"
        autoFocus
      />
      <button 
        type="button"
        className="btn btn-primary mt-2"
        onClick={onCLick}
      >
      set focus
      </button>
    </section>
  )
}
