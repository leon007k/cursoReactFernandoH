import React from 'react';


// * Para trabajar con useCallback, es necesario usar React.memo en el componente hijo
function ShowCounter({incrementCounter}) {

  console.log("Upss... me volvi a renderizar :(")

  return (
    <button 
        className="btn btn-primary" 
        type="button"
        onClick={() => incrementCounter(5)}
      >
      Incrementa +1
    </button>
  )
}

export default React.memo(ShowCounter)
