import { useCounter } from "../hooks/useCounter"


export  function CounterCustomHookApp() {

  const {counter} = useCounter()

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-primary">Reset</button>
      <button className="btn btn-secondary">-1</button>
    </>
  )
}
