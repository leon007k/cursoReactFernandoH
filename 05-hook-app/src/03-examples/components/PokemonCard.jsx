export  function PokemonCard({id, name, sprites = []}) {
  return (
    <section style={{ height: 200}} className="card text-center p-3">
      <h2 className="text-capitalize">#{id} - {name}</h2>

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
