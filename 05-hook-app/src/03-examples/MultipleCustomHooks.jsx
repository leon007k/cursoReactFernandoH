import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from '../03-examples/components/LoadingMessage';
import { PokemonCard } from '../03-examples/components/PokemonCard';

export const MultipleCustomHooks = () => {
  const {counter, incrementCounter, decrementCounter} = useCounter(1)
  const {data, isLoading, hasError, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <section className="container-md">
      <h3>Información del Pokemon</h3>
      <hr />
      {isLoading 
      ? <LoadingMessage /> 
      : (
        <PokemonCard 
          id={data?.id} 
          name={data?.name}
          sprites={[
            data?.sprites?.front_default,
            data?.sprites?.back_default,
            data?.sprites?.front_shiny,
            data?.sprites?.back_shiny
          ]}
        />
        )}
      {!isLoading && hasError && (
        <div className="alert alert-danger">
          Error: {error.code} - {error.message}
        </div>
      )}

      <button 
        className="btn btn-primary mt-2"
        onClick={() =>  counter > 1 ? decrementCounter():null}
      >
        Anterior
      </button>
      <button 
        className="btn btn-primary mt-2"
        onClick={() => incrementCounter()}
      >
        Siguiente
      </button>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </section>
  )
}
