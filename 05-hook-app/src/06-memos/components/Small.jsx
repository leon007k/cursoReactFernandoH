import React from 'react';

function Small({ value }) {

  console.log("Me volvi a dibujar :(")

  return (
    <small>{value}</small>
  )
}

// * React.memo evita que el componente se vuelva a renderizar si las props no han cambiado
// * En este caso, Small solo se volverá a renderizar si el valor de "value"(prop que recibe) cambia
// * Esto es útil para optimizar el rendimiento en componentes que reciben props que no cambian con frecuencia
// * Por ejemplo, si el componente padre se vuelve a renderizar pero el valor de "value" no ha cambiado,
// * Small no se volverá a renderizar, lo que ahorra recursos y mejora la eficiencia
// * En React 19 ya no es necesario usar React.memo, pero sigue siendo una buena práctica para optimizar el rendimiento
export default React.memo(Small);
