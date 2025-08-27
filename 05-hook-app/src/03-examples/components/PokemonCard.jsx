import { useRef, useLayoutEffect } from 'react';

export  function PokemonCard({id, name, sprites = []}) {
  const H2Ref = useRef();
  useLayoutEffect(() => {
    const {height, width} = H2Ref.current.getBoundingClientRect();

    console.log(`El elemento tiene un alto de ${height} y un ancho de ${width}`);
  }, [name])


  return (
    <section style={{ height: 200}} className="card text-center p-3">
      <h2 ref={H2Ref} className="text-capitalize">#{id} - {name}</h2>

      {/** Imagenes */}
      <div>
        {
          sprites.map( sprite => (
            <img key={sprite} src={sprite} alt={name}/>
          ))
        }
      </div>
    </section>
  )
}
